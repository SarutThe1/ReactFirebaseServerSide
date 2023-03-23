const express = require("express");
const router = express.Router();

const{createImage,removeImage} = require('../Controllers/cloudinary')

//middleware
const {auth} = require('../Middleware/auth')

router.post("/images",auth, createImage);
router.post('/removeimages',auth, removeImage)


module.exports = router;