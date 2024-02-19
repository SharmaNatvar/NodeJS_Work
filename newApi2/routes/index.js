const express = require('express')
const routes = express.Router()
const studentRouter = require('./student.route')

routes.use('/student',studentRouter)



module.exports = routes