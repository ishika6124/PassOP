const mongoose = require('mongoose');

const passOpSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'Please add a website for which you want to store the password'],
    },
    passWord: {
      iv: {
        type: String,
        required: [true, 'Encryption IV is required'],
      },
      password: {
        type: String,
        required: [true, 'Encrypted password is required'],
      },
    },
    username: {
      type: String,
      required: [true, 'Please add a username for the given website'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('PassOp', passOpSchema);
