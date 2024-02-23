const express = require('express')
const { studentController } = require('../controller')
const route = express.Router()


// route.get('/get' , studentController.getUserAllData)
route.get('/get/:id' , studentController.getUserDataID)
route.post('/post' , studentController.postUserData)
route.get('/delete/:id' , studentController.deleteUserData)
route.put('/update/:id' , studentController.updateUserData)
route.get('/read' , studentController.getUserAllData)




module.exports = route