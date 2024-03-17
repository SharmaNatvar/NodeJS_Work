const express = require('express')
const { postController } = require('../controller')
const route = express.Router()
const { isLoggedIn } = require('../middleware/auth')
const { upload } = require('../middleware/multer')


route.post('/postCreate' ,isLoggedIn , upload.single('file'), postController.postCreate)
route.get('/get' , postController.getAllPost)


module.exports = route