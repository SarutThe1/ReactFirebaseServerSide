const cloudinary = require('cloudinary').v2;

// Configuration 
cloudinary.config({
    cloud_name: process.env.CLOUNDINARY_CLOUND_NAME,
    api_key: process.env.CLOUNDINARY_API_KEY,
    api_secret: process.env.CLOUNDINARY_API_SECRET
  });

exports.createImage = async (req,res) => {
    try{
        const result = await cloudinary.uploader.upload(req.body.image);
        res.send(result)
    }catch (err) {
        console.log(err)
        res.status(500).send('Upload Error!!!')
    }

};

exports.removeImage = async (req,res) => {
    try{
        let image_id = req.body.public_id
        cloudinary.uploader.destroy(image_id,(result)=>{
            res.send(result);
        })


    }catch (err) {
        console.log(err)
        res.status(500).send('Upload Error!!!')
    }

};