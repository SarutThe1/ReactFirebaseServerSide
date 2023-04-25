const mongoose = require('mongoose')

const AddressSchema = mongoose.Schema({
    details : {
        type: String
    },
    email: {
        type: String,
        ref: "NormUser"
    }

},{timestamps:true})

module.exports = mongoose.model('Address',AddressSchema)