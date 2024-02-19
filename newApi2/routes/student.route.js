const express = require('express')
const { studentController } = require('../controller')
const router = express.Router()


// post api
router.post('/post', studentController.postData)


// get api
router.get('/get', studentController.getData)


module.exports = router
