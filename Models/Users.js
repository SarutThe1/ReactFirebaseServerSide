const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email:{
        type: String,
        require:true
    },
    phoneNumber:String,
    role:{
        type:String,
        default:'user'
    }

},{timestamps:true})

module.exports = mongoose.model('User',userSchema)