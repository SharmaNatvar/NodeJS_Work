const express = require('express')
const routes = express.Router()
const userRoute = require('./user.route')
const postRoute = require('./post.route')



routes.use('/user' , userRoute)
routes.use('/post' , postRoute)


module.exports = routes