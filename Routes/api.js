const express = require("express");
const router = express.Router();

//controller
const {register,login,listUser,editUser,deleteUser} = require('../Controllers/auth')

/*
Endpoint http://localhost:5000/api/register
Method POST
public
*/
router.post('/register',register)

/*
Endpoint http://localhost:5000/api/login
Method POST
public
*/
router.post('/login',login)

/*
Endpoint http://localhost:5000/api/authen
Method GET
public
*/
router.get('/authen',listUser)


/*
Endpoint http://localhost:5000/api/authen
Method PUT
public
*/
router.put('/authen',editUser)

/*
Endpoint http://localhost:5000/api/authen
Method DELETE
public
*/
router.delete('/authen',deleteUser)

module.exports = router;