const express = require('express')
const route = require('./user.route')
const routes = express.Router()


routes.use('/user',route)


module.exports = routes