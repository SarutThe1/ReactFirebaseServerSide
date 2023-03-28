const express = require('express')
const router = express.Router()

const {
    createPet
} = require('../Controllers/mypets')

router.post('/pet', createPet)

module.exports = router