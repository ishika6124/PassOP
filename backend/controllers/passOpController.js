const asyncHandler = require('express-async-handler');
const PassOp = require('../models/passOpModel');
const User = require('../models/userModel');
const { encrypt, decrypt } = require('../encryptionhandler'); // Assuming encryption code is in utils/encryption.js

// @desc    Get passwords
// @route   GET /api/passwords
// @access  Private
const getpassOp = asyncHandler(async (req, res) => {
  const passOps = await PassOp.find({ user: req.user.id });

  // Decrypt passwords before sending to the client
  const decryptedPassOps = passOps.map((passOp) => ({
    ...passOp._doc,
    passWord: decrypt(passOp.passWord), // Decrypt the password
  }));

  res.status(200).json(decryptedPassOps);
});

// @desc    Set passwords
// @route   POST /api/passwords
// @access  Private
const setpassOp = asyncHandler(async (req, res) => {
  if (!req.body.text || !req.body.passWord || !req.body.username) {
    res.status(400);
    throw new Error('Please add all required fields');
  }

  // Encrypt the password before saving
  const encryptedPass = encrypt(req.body.passWord);

  const passOp = await PassOp.create({
    text: req.body.text,
    passWord: encryptedPass, // Store encrypted password
    user: req.user.id,
    username: req.body.username,
  });

  res.status(200).json(passOp);
});

// @desc    Update passwords
// @route   PUT /api/passwords/:id
// @access  Private
const updatepassOp = asyncHandler(async (req, res) => {
  const passOp = await PassOp.findById(req.params.id);

  if (!passOp) {
    res.status(400);
    throw new Error('Password entry not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged-in user matches the entry owner
  if (passOp.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  // Encrypt the updated password if it exists
  const updatedData = { ...req.body };
  if (req.body.passWord) {
    updatedData.passWord = encrypt(req.body.passWord);
  }

  const updatedPassOp = await PassOp.findByIdAndUpdate(req.params.id, updatedData, {
    new: true,
  });

  res.status(200).json(updatedPassOp);
});

// @desc    Delete password
// @route   DELETE /api/passwords/:id
// @access  Private
const deletepassOp = asyncHandler(async (req, res) => {
  const passOp = await PassOp.findById(req.params.id);

  if (!passOp) {
    res.status(400);
    throw new Error('Password entry not found');
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged-in user matches the entry owner
  if (passOp.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await passOp.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getpassOp,
  setpassOp,
  updatepassOp,
  deletepassOp,
};
