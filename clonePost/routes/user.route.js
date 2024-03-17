const express = require('express')
const { userController } = require('../controller')
const { isLoggedIn } = require('../middleware/auth')
const { upload } = require('../middleware/multer')
const route = express.Router()



route.post('/login' , userController.loginUser)
route.get('/logout' , userController.logOutUser)
route.post('/register' , userController.postUser)
route.post('/fileUpload' , isLoggedIn, upload.single("image"), userController.postImg)



module.exports = route