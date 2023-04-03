const express = require('express')
const router = express.Router()

const {
    searchFilters,
    createPet,
    listPet,
    deletePet,
    
} = require('../Controllers/mypets')

router.post('/pet', createPet)

router.get('/pet', listPet)

router.delete('/pet/:id', deletePet)




router.post('/search/filters',searchFilters)

module.exports = router