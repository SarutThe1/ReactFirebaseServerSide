const express = require("express");
const router = express.Router();

const{createImage,removeImage} = require('../Controllers/cloudinary')

router.post("/images", createImage);
router.post('removeimages', removeImage)


module.exports = router;