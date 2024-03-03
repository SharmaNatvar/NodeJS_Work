const express = require('express')
const routes = express.Router()
const userRoute = require('./user.route')
const postRoute = require('./post.route')
const registerRoute = require('./register.route')



routes.use('/userRegister' , registerRoute)
routes.use('/user' , userRoute)
routes.use('/post' , postRoute)


module.exports = routes