const express = require('express')
const { userController } = require('../controller')
const { isLoggedIn } = require('../middleware/auth')
const route = express.Router()


route.get('/' , userController.Home)
route.get('/profile', isLoggedIn , userController.profile)
route.get('/get' , userController.getAllUser)
route.post('/post' , userController.postUser)



module.exports = route