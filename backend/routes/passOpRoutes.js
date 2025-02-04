const express = require('express')
const router = express.Router()
const {
  getpassOp,
  setpassOp,
  updatepassOp,
  deletepassOp,
} = require('../controllers/passOpController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get( protect,getpassOp).post( protect,setpassOp)
router.route('/:id').delete(protect,deletepassOp).put(protect,updatepassOp)

module.exports = router