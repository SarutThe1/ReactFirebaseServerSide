const cloudinary = require("cloudinary").v2;

// Configuration 
cloudinary.config({
  cloud_name: "dcivyfvvk",
  api_key: "113881885556649",
  api_secret: "Ah9tciGjEATBWU-1kGSUUcpCiTs"
});

exports.createImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.image, {
      public_id: Date.now(),
      resource_type: "auto",
    });
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send("Upload Error!!!");
  }
};

exports.removeImage = async (req, res) => {
  try {
    let image_id = req.body.public_id;
    cloudinary.uploader.destroy(image_id, (result) => {
      res.send(result);
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Remove Error!!!");
  }
};