const express = require('express')
const { userController } = require('../controller')
const route = express.Router()

route.get('/get', userController.getUserData)

route.post('/post', userController.postUserData)

route.delete('/delete/:id', userController.deleteUserData)

route.put('/update/:id',userController.updateUserData)

module.exports = route