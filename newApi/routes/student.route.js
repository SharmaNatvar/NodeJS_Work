const express = require('express');
const route = express.Router()
const {studentController} = require('../controller')



route.post('/getData', studentController.getStudent)


module.exports = route