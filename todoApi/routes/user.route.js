const express = require('express')
const { userController } = require('../controller')
const route = express.Router()



route.get('/read' , userController.getUser)
route.post('/create' , userController.createUser)
route.put('/update/:id' , userController.updateUser)
route.delete('/delete/:id' , userController.deleteUser)


module.exports = route