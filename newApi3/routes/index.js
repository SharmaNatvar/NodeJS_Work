const express = require('express')
const teacherRoute = require('./teacher.route')
const router = express.Router()


router.use('/teacher', teacherRoute)


module.exports = router