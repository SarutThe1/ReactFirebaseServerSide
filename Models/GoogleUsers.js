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
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    telephone:{
        type: String
    },
    gender:{
        type: String,
    },
    birthday:{
        type: Date,
    },
    address:{
        type: String
    },
    role:{
        type: String,
        default:'user'
    },
    picture:{
        type: String
    }

},{timestamps:true})

module.exports = mongoose.model('ggUser',userSchema)