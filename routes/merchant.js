const express = require('express')
const fs = require('fs')
const router = express.Router()
const controllermerchant = require('../controller/controllermerchant')


router.post('/add', controllermerchant.addmerchant)
router.post('/', controllermerchant.selectmerchant)
router.post('/:id', controllermerchant.updatemerchant)
router.post('/delete/:id', controllermerchant.deletemerchant)

module.exports