const express = require('express')
const router = express.Router()

const {
    createPet,
    listPet,
} = require('../Controllers/mypets')

router.post('/pet', createPet)

router.get('/pet', listPet)

module.exports = router