const Address = require('../Models/Address')

exports.createAd = async (req, res) => {
    try {
        const address = await new Address({
            details: req.body.details,
            email: req.body.email
        }).save()
        res.send(address)
    } catch (err) {
        res.status(500).send("Create my pets ERROR!!!" + err)
    }
}

exports.listAd = async (req,res) => {
    try {
        const address = await Address.find().sort([['createdAt','asc']]) 
        res.send(address)
    }catch(err){
        res.status(500).send("List pets ERROR!!!" + err)
    }
}

//Show only my pet
const handleMyAddress = async (req, res, email) => {
    let address = await Address.find({  email  })
    .sort([["createdAt", "asc"]])
    res.send(address)
}

exports.searchFiltersAd = async (req, res) => {
    const {
        email
    } = req.body

    if (email) {
        await handleMyAddress(req, res, email)
    }
}


//delete
exports.deleteAd = async(req,res)=>{
    try{
        const deleted = await Address.findOneAndRemove({_id:req.params.id})
        .exec()

        res.send(deleted)
    }catch(err){
        res.status(500).send("Delete pets ERROR!!!" + err)
    }
}

exports.readAd = async(req,res) => {
    try{
        const address = await Address
        .findOne({_id:req.params.id})
        .exec()
        res.send(address)
    }catch(err){
        res.status(500).send("Server Error!");
    }
}

//update
exports.updateAd = async (req, res) => {
    try {
      const address = await Address.findOneAndUpdate(
        { _id: req.params.id },req.body.address,
  
        {new:true}).exec()
      res.send(address)
    } catch (err) {
      res.status(500).send("Server Error!");
    }
  };