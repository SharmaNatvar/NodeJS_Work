const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(process.env.DBBASEURL)
    .then(() => {
      console.log("dbConnect");
    })
    .catch((err) => {
      console.log('not connect db');
      console.log(err);
    });
};

module.exports = dbConnect;
