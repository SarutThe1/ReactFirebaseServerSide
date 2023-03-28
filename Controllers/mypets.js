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