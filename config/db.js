const mongoose = require('mongoose')

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_NAME)
        console.log('Connected DB success')
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB