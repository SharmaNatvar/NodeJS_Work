const express = require("express");
const { studentController } = require("../controller");
const route = express.Router();

// post student data
route.post("/post", studentController.createStudent);
// get student data
route.get('/get', studentController.getAllStudent)
// get student data by name
route.get('/getbyName/:userName', studentController.getNameStudent)
// get student data by id
route.get('/getid/:id', studentController.getIdStudent)
// delete student data
route.delete('/delete/:id', studentController.deleteStudent)
// update student data
route.put('/update/:id', studentController.updateStudent)




module.exports = route
