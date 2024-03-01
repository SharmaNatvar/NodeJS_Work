const { userService } = require("../services");


// get user
const getUser = async (req, res) => {
  try {
    const resBody = await userService.userGet();
    if (!resBody) {
      throw new Error("data not found");
    }

    res.status(200).json({
      message: "get data",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error found",
      err: err.message,
    });
  }
};

// create user

const createUser = async (req, res) => {
  try {
    const body = req.body;
    const email = body.email;

    if (!body || !email) {
      throw new Error(" data not get");
    }

    const resEmail = await userService.checkEmail(email);

    if (resEmail) {
      throw new Error("email must be unqine");
    }

    const resBody = await userService.userCreate(body);

    if (!resBody) {
      throw new Error(" user not created");
    }

    res.status(200).json({
      message: "user created",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "Error found",
      err: err.message,
    });
  }
};

// update user

const updateUser = async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;

    if (!body || !id) {
      throw new Error("data not get");
    }

    const resId = await userService.checkId(id);

    if (!resId) {
      throw new Error("user not found");
    }

    const resBody = await userService.userUpadate(id , body);

    if (!resBody) {
      throw new Error("user not update");
    }

    res.status(200).json({
      message: "user update",
      data: resBody,
    });
  } catch (err) {
    res.status(400).json({
      message: "error found",
      err: err.message,
    });
  }
};


// user Delete

const deleteUser = async(req , res)=>{

    try{

        const {id} = req.params

        if(!id){
            throw new Error(' id not get')
        }

        const resId = await userService.checkId(id)
        if(!resId ){
            throw new Error('user not found')
        }

        const resBody = await userService.userDelete(id)

        if(!resBody){
            throw new Error('user not delete')
        }

        res.status(200).json({
            message:'user delete',
            data : resBody
        })
    }
    catch(err){
        res.status(400).json({
            message:'error found',
            err: err.message
        })
    }
}




module.exports = {getUser , createUser , deleteUser, updateUser}