const express = require('express')
const { studentController } = require('../controller')
const validate = require('../middlewares/validate')
const { playerValidation } = require('../validations')
const route = express.Router()


route.post('/create' ,validate(playerValidation.player) ,studentController.createPlayer)
route.get('/read' , studentController.readAll)
route.put('/update/:id' ,validate(playerValidation.player), studentController.updatePlayer)
route.delete('/delete/:id' , studentController.deletePlayer)


module.exports = route