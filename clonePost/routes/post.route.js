const express = require('express')
const { postController } = require('../controller')
const route = express.Router()



route.post('/post' , postController.postCreate)
route.get('/get',postController.getAllPost)



module.exports = route