const express = require("express");
const router = express.Router();

const{createImage,removeImage} = require('../Controllers/cloudinary')

//middleware
const {auth} = require('../Middleware/auth')

router.post("/images", createImage);
router.post('/removeimages', removeImage)


module.exports = router;