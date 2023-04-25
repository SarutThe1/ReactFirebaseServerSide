const express = require("express");
const router = express.Router();

//controller
const {listUser,readUser,updateUser,removeUser} = require('../Controllers/users')

//middleware
const {auth,adminCheck} = require('../Middleware/auth')

/*
Endpoint http://localhost:5000/api/
*/

router.get('/users',listUser)

router.get('/users/:id',readUser)

router.put('/users/:id',updateUser)

router.delete('/users/:id',auth,adminCheck,removeUser)




module.exports = router;