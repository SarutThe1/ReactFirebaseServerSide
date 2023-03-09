const express = require("express");
const router = express.Router();

//controller
const {register,login,listUser,editUser,deleteUser} = require('../Controllers/auth')

//middleware
const {auth} = require('../Middleware/auth')

/*
Endpoint http://localhost:5000/api/register
*/
router.post('/register',register)

router.post('/login',login)

router.get('/authen',listUser)

router.put('/authen',editUser)

router.delete('/authen',deleteUser)

router.get('/1',auth,(req,res)=>{
    res.send('1 Hi 1')
})


module.exports = router;