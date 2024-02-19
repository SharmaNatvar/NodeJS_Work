const express = require('express')
const { userController } = require('../controller')
const route = express.Router()

route.get('/get', userController.getUserData)

route.post('/post', userController.postUserData)


module.exports = route