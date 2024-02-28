const express = require('express')
const routes = express.Router()
const playerRoute = require('./player.route')


routes.use('/player' , playerRoute)



module.exports = routes