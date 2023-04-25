const express = require('express')
const router = express.Router()

const {
    searchFiltersAd,
    createAd,
    listAd,
    readAd,
    updateAd,
    deleteAd,
    
} = require('../Controllers/address')
/*
Endpoint http://localhost:5000/api/
*/
router.post('/add', createAd)

router.get('/add', listAd)

router.delete('/add/:id', deleteAd)

router.get('/adds/:id', readAd)

router.put('/add/:id', updateAd)

router.post('/search/filtersad',searchFiltersAd)

module.exports = router