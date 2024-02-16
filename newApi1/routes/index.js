const express = require('express')
const route = require('./student.route')
const routes = express()


routes.use('/student',route)

module.exports = routes