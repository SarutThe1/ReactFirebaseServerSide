const express = require("express");
const router = express.Router();

const {generateOTP,verifyOTP} = require('../Controllers/otp')

const {localVariables} = require('../Middleware/auth')

router.get('/generateOTP', generateOTP)
router.get('/verifyOTP',verifyOTP)


module.exports = router;