const express = require('express')
const routes = express.Router()
const todoRoute = require('./todo.route')
const userRoute = require('./user.route')

routes.use('/user', userRoute)
routes.use('/todo', todoRoute)


module.exports = routes