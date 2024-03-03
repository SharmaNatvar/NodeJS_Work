const { userModel } = require("../model")


const checkEmail = (email) =>{
    return userModel.findOne({email : email})
}

const checkId = (id) =>{
    return userModel.findById(id)
}

const userPost = (body) =>{
 return userModel.create(body)
}

const allUserGet = () =>{
    return userModel.find().populate('posts')
}





module.exports = {checkId, checkEmail, userPost , allUserGet}