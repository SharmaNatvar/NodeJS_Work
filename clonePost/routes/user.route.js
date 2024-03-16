const express = require('express')
const { userController } = require('../controller')
const route = express.Router()



route.post('/login' , userController.loginUser)
route.get('/logout' , userController.logOutUser)
route.post('/register' , userController.postUser)



module.exports = route