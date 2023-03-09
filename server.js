const express = require('express')

const mongoose = require('mongoose')

const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')


require('dotenv').config();

const {readdirSync} = require('fs')

//DB
const connectDB = require('./config/db')
connectDB();

//app
const app = express();

//middleware
app.use(morgan('dev'))
app.use(bodyParser.json({limit:'20mb'}))
app.use(cors())

//Routes
readdirSync('./Routes').map((r)=> app.use('/api',require("./Routes/"+r)))




//Runserver
const port = 5000
app.listen(port,()=>console.log('Server is running on port '+port))