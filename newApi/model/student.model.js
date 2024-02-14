const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({
    name:String,
    email:String
})


const student = mongoose.model("studentSchema", studentSchema)
module.exports = student