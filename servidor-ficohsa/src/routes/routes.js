const express = require('express')
const {getItems, getItem} = require('../controllers/itemController')

const app = express.Router()

app.get('/items', getItems)
app.get('/item', getItem)

module.exports = app
