const express = require('express')
const { studentController } = require('../controller')
const route = express()


route.get('/get', studentController.getData)




// routes.use( '/k',
route.post('/post', studentController.postData)
// )

module.exports = route


