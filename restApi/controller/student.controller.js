const { studentService } = require("../services");

// get student function
const getAllStudent = async (req, res) => {
  try {
    const resBody = await studentService.getAllStudentData();
    if (!resBody) {
      throw new Error("body not Found");
    }

    res.status(200).json({
      message: "success get",
      data: resBody,
    });
  } catch (err) {
    res.status(500).json({
      message: "error found",
      err: err.message,
    });
  }
};

// get student by userName function
const getNameStudent = async (req, res) => {
  try {
    // get username from url
    const { userName } = req.params;
    if (!userName) {
      throw new Error("userName not get");
    }

    // get body from database
    const resBody = await studentService.getNameStudentData(userName);
    console.log(resBody);
    if (!resBody) {
      throw new Error("user not fount in dataBase");
    }

    // give sucess response body
    res.status(200).json({
      messgae: "student get",
      data: resBody,
    });
  } catch (err) {
    // give error response body
    res.status(400).json({
      message: "error found",
      err: err.message,
    });
  }
};

// get student by Id function
const getIdStudent = async (req, res) => {
  try {
    // get username from url
    const { id } = req.params;
    console.log(id, "id");
    if (!id) {
      throw new Error("id not get");
    }

    // get body from database
    const resBody = await studentService.getIdStudentData(id);
    console.log(resBody);
    if (!resBody) {
      throw new Error("id not fount in dataBase");
    }

    // give sucess response body
    res.status(200).json({
      messgae: "student get",
      data: resBody,
    });
  } catch (err) {
    // give error response body
    res.status(400).json({
      message: "error found",
      err: err.message,
    });
  }
};

// create student function
const createStudent = async (req, res) => {
  try {
    const body = req.body;
    const email = body.email;

    //   check email
    const checkEmail = await studentService.checkData(email);
    if (checkEmail) {
      throw new Error("your email must be unquie");
    }

    // store body
    const resBody = await studentService.storeStudent(body);
    if (!resBody) {
      throw new Error("data not Store");
    }

    //   sand store data response
    res.status(200).json({
      message: "data create",
      data: resBody,
    });
  } catch (err) {
    res.status(500).json({
      message: "error",
      err: err.message,
    });
  }
};

// delete student function

const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
        throw new Error("id not get");
    }
    const resBody = await studentService.getIdStudentData(id);
    if (!resBody) {
        throw new Error("id not match in database");
    }
    const idBody = await studentService.deleteIdStudent(id);
    if (!idBody) {
      throw new Error("data not delete");
    }

    res.status(200).json({
      message: "scussesfully delete",
      data: idBody,
    });
  } catch (err) {
    res.status(500).json({
      message: "error Found",
      err: err.message,
    });
  }
};


// update student function 
const updateStudent = async(req , res) =>{
    try{
        const {id} = req.params
        const body = req.body
    console.log(id , 'id 1');
    console.log(body , 'id 1');

    if(!id || !body){
        throw new Error('id not get')
    }

    const resBody = await studentService.getIdStudentData(id)
    if(!resBody){
        throw new Error('data not found')
    }

    const putBody = await studentService.updateStudentData(id , body)
    console.log(putBody);
        if(!putBody){
            throw new Error('data not update')
        }

    res.status(200).json({
        message:'scussesfully update',
        data:putBody
    })
    }catch(err){
        res.status(500).json({
            message:'error found',
            err:err.message
        })
    }
    

}




module.exports = {
  createStudent,
  getAllStudent,
  getNameStudent,
  getIdStudent,
  deleteStudent,
  updateStudent
};
