const { userServices } = require("../services");

const getUserData = async (req, res) => {
  const body = await userServices.getDataService();
  // res.render("./index", { body });
  res.status(200).json({
    message: "id found",
    body
  });
};

const postUserData = async (req, res) => {
  const body = req.body;
  const userData = await userServices.postDataService(body);
  // res.render('./user',{userData})
  res.status(200).json({
    message: "id found",
    userData
  });
};

const deleteUserData = async (req, res) => {
  try {
    const {id} = req.params;
    console.log(id , 'id controller 1');
    const idData = await userServices.checkID(id);
    console.log(idData,'idData id controller 2');
    if(!idData){
      throw new Error('data not Found')
    }
    const deleteData = await userServices.deleteUserData(id)
    if(!deleteData){
      throw new Error(' data not Found')
    }

    console.log(deleteData , 'deleteData controller 3');
    res.status(200).json({
      message: "id found",
      idData,
    });
  } catch (err) {
    res.status(400).json({
      message: "give write value",
      err:err.message,
    });
  }
};

const updateUserData = async(req, res)=>{
  try {
    const {id} = req.params
    const body = req.body
    console.log(id,'update data 1');
    const idCheck = await userServices.checkID(id)
    console.log(idCheck,'update data 1');
    if(!idCheck){
      throw new Error('check id not found')
    }
    const updateData = await userServices.updateUserData(id , body)
    console.log(updateData);
    if(!updateData){
      throw new Error('update data not found')
    }
    res.status(201).json({
      message:"data found",
      id,
      updateData
    })
  } catch (error) {
    res.status(500).json({
      message : "data not found",
      err : err.message
    })
  }
}

module.exports = { getUserData, postUserData, deleteUserData , updateUserData };
