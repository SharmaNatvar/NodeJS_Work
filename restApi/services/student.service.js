const student = require("../model/student.model");

// check data in database
const checkData = (val) => {
  return student.findOne({ email: val });
};

// get all data
const getAllStudentData = () => {
  return student.find();
};

// get student by name
const getNameStudentData = (val) => {
  return student.find({ userName: val });
};

// get student by Id
const getIdStudentData = (val) => {
  return student.findById(val);
};

// store body
const storeStudent = (body) => {
  return student.create(body);
};

// delete data
const deleteIdStudent = (val) => {
  return student.findByIdAndDelete(val);
};

// update data 
const updateStudentData = (id , body) =>{
    return student.findByIdAndUpdate(id , body , {new:true})
}


module.exports = {
  checkData,
  storeStudent,
  getAllStudentData,
  getNameStudentData,
  getIdStudentData,
  deleteIdStudent,
  updateStudentData
};
