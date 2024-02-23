const { userModel } = require("../model");

// get all user
const getAllData = () => {
  return userModel.find();
};

// check id
const checkId = (id) => {
  return userModel.findById(id);
};

// check email
const CheckEmail = (email) => {
  return userModel.findOne({ email });
};

// store data

const postBody = (body) => {
  return userModel.create(body);
};

// delete user data
const deleteUser = (id) => {
  return userModel.findByIdAndDelete(id);
};

// update user data

const updateUser = (id, body) => {
  return userModel.findByIdAndUpdate(id, body, { new: true });
};

module.exports = {
  getAllData,
  checkId,
  CheckEmail,
  postBody,
  deleteUser,
  updateUser,
};
