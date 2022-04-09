const express = require('express')
const fs = require('fs')
const router = express.Router()
const controllerProduct = require('../controller/controllerProduct')


router.post('/add', controllerProduct.addProduct)
router.post('/', controllerProduct.selectProduct)
router.post('/:id', controllerProduct.updateProduct)
router.post('/delete/:id', controllerProduct.deleteProduct)

module.exports
