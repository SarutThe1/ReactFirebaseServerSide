const express = require("express");
const router = express.Router();

//controller
const {register,login,currentNormUser,listUser,editUser,deleteUser} = require('../Controllers/auth')

//middleware
const {auth,adminCheck} = require('../Middleware/auth')

/*
Endpoint http://localhost:5000/api/
*/
router.post('/register',register)

router.post('/login',login)

router.post('/current-normuser',auth,currentNormUser)

router.post('/current-admin',auth,adminCheck,currentNormUser)



module.exports = router;