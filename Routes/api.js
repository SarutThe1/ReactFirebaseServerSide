const express = require("express");
const router = express.Router();

//controller
const {register,login,currentNormUser,listUser,editUser,deleteUser} = require('../Controllers/auth')

//middleware
const {auth,adminCheck} = require('../Middleware/auth')

/*
Endpoint http://localhost:5000/api/register
*/
router.post('/register',register)

router.post('/login',login)

router.post('/current-normuser',auth,currentNormUser)

router.post('/current-admin',auth,adminCheck,currentNormUser)

router.get('/authen',listUser)

router.put('/authen',editUser)

router.delete('/authen',deleteUser)


module.exports = router;