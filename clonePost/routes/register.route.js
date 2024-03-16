const express = require('express')
const { registerController } = require('../controller')
const route = express.Router()



route.post('/register' , registerController.registerUser)
route.post('/login' , registerController.loginUser)
route.get('/logout' , registerController.logOutUser)



module.exports = route