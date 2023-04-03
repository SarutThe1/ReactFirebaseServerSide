const Pets = require('../Models/Mypets')

exports.createPet = async (req, res) => {
    try {
        const mypets = await new Pets({
            name: req.body.name,
            species: req.body.species,
            size: req.body.size,
            gender: req.body.gender,
            age: req.body.age,
            weight: req.body.weight,
            congenital_disease: req.body.congenital_disease,
            sterilization: req.body.sterilization,
            details: req.body.details,
            vaccinationpic: req.body.vaccinationpic,
            petpics: req.body.petpics,
            email: req.body.email
        }).save()
        res.send(mypets)
    } catch (err) {
        res.status(500).send("Create my pets ERROR!!!" + err)
    }
}

exports.listPet = async (req,res) => {
    try {
        const mypets = await Pets.find().sort([['createdAt','asc']]) 
        res.send(mypets)
    }catch(err){
        res.status(500).send("List pets ERROR!!!" + err)
    }
}

//Show only my pet
const handleOwner = async (req, res, email) => {
    let mypets = await Pets.find({  email  })
    .sort([["createdAt", "asc"]])
    res.send(mypets)
}

exports.searchFilters = async (req, res) => {
    const {
        email
    } = req.body

    if (email) {
        await handleOwner(req, res, email)
    }
}

//delete
exports.deletePet = async(req,res)=>{
    try{
        const deleted = await Pets.findOneAndRemove({_id:req.params.id})
        .exec()

        res.send(deleted)
    }catch(err){
        res.status(500).send("Delete pets ERROR!!!" + err)
    }
}