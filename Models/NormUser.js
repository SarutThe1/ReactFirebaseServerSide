const mongoose = require('mongoose')

const NuserSchema = mongoose.Schema({
    
    email:{
        type: String,
        require:true
    },
    password:{
        type: String
    },
    username:{
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
        type: Array
    }
    

},{timestamps:true})

module.exports = mongoose.model('NormUser',NuserSchema)