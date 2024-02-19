const { userServices } = require("../services");



const getUserData = async(req, res) => {
    const body = await userServices.getDataService()
  res.status(201).json({
    message: "data get",
    data: body
  });
};


const postUserData = async(req , res) =>{
    const body = req.body
const userData = await userServices.postDataService(body)
    res.render('/',{userData})
}



module.exports = {getUserData , postUserData}
