const { postModel, userModel } = require("../model")

const postCreate = (body) =>{
    return postModel.create(body)
}

const getAllPost = () =>{
    return postModel.find()
}


const findUserId = (id) =>{
    return userModel.findOne({_id : id})
}


module.exports = {postCreate , getAllPost , findUserId }