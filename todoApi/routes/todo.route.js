const express = require('express')
const { todoController } = require('../controller')
const route = express.Router()


route.get('/read' , todoController.readtodo)
route.post('/create' , todoController.createTodo)
route.put('/update/:id' , todoController.updateTodo)
route.delete('/delete/:id' , todoController.deleteTodo)




module.exports = route