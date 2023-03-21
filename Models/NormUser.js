const mongoose = require('mongoose')

const NuserSchema = mongoose.Schema({
    
    email:{
        type: String,
        require:true
    },
    password:{
        type: String
    },
    name:{
        type: String,
        require:true
    },
    firstname:{
        type: String,
        default:''
    },
    lastname:{
        type: String,
        default:''
    },
    telephone:{
        type: String,
        default:''
    },
    gender:{
        type: String,
        default:''
    },
    birthday:{
        type: Date,
    },
    address:{
        type: Array,
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