const express = require('express')
const { userController } = require('../controller')
const route = express.Router()


route.get('/get' , userController.getAllUser)
route.post('/post' , userController.postUser)



module.exports = route