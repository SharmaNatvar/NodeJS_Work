const express = require('express')
const studentController = require('../controller/teacher.controller')
const route = express.Router()



route.get('/get',studentController.getDataFun)


route.post('/post',studentController.postDataFun)

module.exports = route