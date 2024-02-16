const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    required: true,
  },
});

const student = mongoose.model("studentSchema", studentSchema);
module.exports = student;
