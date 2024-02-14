const express = require('express');
const route = express.Router()
const {studentController} = require('../controller')



route.get('/getData', studentController.getStudent)


module.exports = route