const { userServices } = require("../services");

// get user data
const getUserAllData = async (req, res) => {
  try {
    const resBody = await userServices.getAllData();
    if (!resBody) {
      throw new Error("Body response not Get");
    }
    res.render('read' , {user : resBody})
    // res.status(200).json({
    //   message: "data get sucessfully",
    //   data: resBody,
    // });
  } catch (err) {
    res.status(400).json({
      message: "error found",
      err: err.message,
    });
  }
};

// get Data by id

const getUserDataID = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      throw new Error("id not found");
    }
    const resId = await userServices.checkId(id);
    if (!resId) {
      throw new Error(" id Data Not found");
    }

    res.status(200).json({
      message: " successfully done ",
      data: resId,
    });
  } catch (err) {
    res.status(400).json({
      message: "error Found",
      err: err.message,
    });
  }
};

// post user data

const postUserData = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const email = body.email;
    if (!body || !email) {
      throw new Error("data not found");
    }

    const resEmail = await userServices.CheckEmail(email);
    if (resEmail) {
      throw new Error("same Email found");
    }

    const resBody = await userServices.postBody(body);
    if (!resBody) {
      throw new Error("Data not Store");
    }

    // res.get('./read',(res)=>{
    //     res.render('read')
    res.redirect('./read')
    // })
    
    // res.status(200).json({
    //   message: "successfully done",
    //   data: resBody,
    // });
  } catch (err) {
    res.status(400).json({
      message: "error Found",
      err: err.message,
    });
  }
};

// delete Data

const deleteUserData = async (req, res) => {
  try {
    const {id} = req.params;
    if (!id) {
      throw new Error("id not get");
    }
    const resId = await userServices.checkId(id);
    if (!resId) {
      throw new Error("id not found ");
    }
    const resBody = await userServices.deleteUser(id);

    if (!resBody) {
      throw new Error("data not delete");
    }

    res.redirect('/')

    // res.status(200).json({
    //   message: "successfully done",
    //   data: resBody,
    // });
  } catch (err) {
    res.status(400).json({
      message: "error Found",
      err: err.message,
    });
  }
};

// update user data

const updateUserData = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    if (!id) {
      throw new Error("id not get");
    }

    const resId = await userServices.checkId(id);
    if (!resId) {
      throw new Error("id not found");
    }

    const resBody = await userServices.updateUser(id, body);

    if (!resBody) {
      throw new Error("user not update");
    }

    res.status(200).json({
      message: "successfully done",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "error found",
      err: err.message,
    });
  }
};

module.exports = {
  updateUserData,
  postUserData,
  getUserAllData,
  getUserDataID,
  deleteUserData,
};
