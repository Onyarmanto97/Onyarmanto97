require('dotenv').config()
const express = require ('express')
const app = express()
const port = process.env.PORT
const fs = require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
const db = require('./config/db')

const merchant = require ('./routes/merchant')
app.use('./merchant', merchant)
const product = require('./routes/product')
app.use('./product', product)



app.get('/', (req, res) => {
    res.send('Merchant World!')
})



app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})