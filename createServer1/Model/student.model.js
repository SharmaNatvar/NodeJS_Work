const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    enum: ["boy", "girl"],
  },
});

const student = mongoose.model('studentSchema',studentSchema)
module.exports = student