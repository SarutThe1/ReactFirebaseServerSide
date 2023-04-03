const express = require('express')
const router = express.Router()

const {
    searchFilters,
    createPet,
    listPet,
    readPet,
    updatePet,
    deletePet,
    
} = require('../Controllers/mypets')

router.post('/pet', createPet)

router.get('/pet', listPet)

router.delete('/pet/:id', deletePet)

router.get('/pets/:id', readPet)

router.put('/pet/:id', updatePet)




router.post('/search/filters',searchFilters)

module.exports = router