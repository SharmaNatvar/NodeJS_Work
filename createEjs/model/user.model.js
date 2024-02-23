const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
  },
  phone: {
    type: Number,
  },
});

const user = new mongoose.model("userSchema", userSchema);
module.exports = user;
