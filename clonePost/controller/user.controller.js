const { userService } = require("../services");


const Home = (req , res) =>{
  res.render ('index',{title:'Express'})
}

const profile = (req , res) =>{
  res.render ('profile',{title:'profile'})
}


const postUser = async (req, res) => {
  try {
    const body = req.body;
    const email = body.email;
    if (!body || !email) {
      throw new Error("data not get");
    }

    const resEmail = await userService.checkEmail(email);

    if (resEmail) {
      throw new Error("email must be unique");
    }

    const resBody = await userService.userPost(body);

    if (!resBody) {
      throw new Error("user not created");
    }

    res.status(201).json({
      message: "scusses created",
      data: resBody,
    });
  } catch (error) {
    res.status(400).json({
      message: "error found",
      data: error.message,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const resBody = await userService.allUserGet();

    if (!resBody) {
      throw new Error("data not get");
    }

    res.status(200).json({
      message: " data get",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "error found",
      data: err.message,
    });
  }
};

module.exports = { postUser, getAllUser, Home, profile };
