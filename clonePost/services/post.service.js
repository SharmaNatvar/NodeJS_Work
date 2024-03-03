const { postModel, userModel } = require("../model")

const postCreate = (body) =>{
    return postModel.create(body)
}

const getAllPost = () =>{
    return postModel.find().populate('userId')
}

const findUserId = (id) =>{
    console.log(id ,' id 1');
    return userModel.findOne({_id : id})
}


module.exports = {postCreate , getAllPost , findUserId}