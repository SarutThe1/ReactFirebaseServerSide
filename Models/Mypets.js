const mongoose = require('mongoose')

const MypetsSchema = mongoose.Schema({
    name : {
        type: String
    },
    species : {
        type: String
    },
    size : {
        type: String
    },
    gender : {
        type: String
    },
    age : {
        type: String
    },
    weight : {
        type: String
    },
    congenital_disease : {
        type: String
    },
    sterilization : {
        type: String
    },
    details : {
        type: String
    },
    vaccinationpic : {
        type: Array
    },
    petpics : {
        type: Array
    },
    email: {
        type: String,
        ref: "NormUser"
    }
    

},{timestamps:true})

module.exports = mongoose.model('Mypets',MypetsSchema)