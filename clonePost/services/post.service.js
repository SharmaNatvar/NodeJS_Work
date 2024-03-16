const { postModel, userModel } = require("../model")

const postCreate = (body) =>{
    return postModel.create(body)
}

const getAllPost = () =>{
    return postModel.find().populate('userId')
}

const findUser = (userName) =>{
    return userModel.findOne({username : userName})
}

const findUserId = (id) =>{
    return userModel.findOne({_id : id})
}


module.exports = {postCreate , getAllPost , findUserId , findUser}