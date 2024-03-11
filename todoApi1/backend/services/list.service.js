const { userModel, listModel } = require("../model")


const createList = (body) =>{
    return listModel.create(body)
}

const findUser = (id) =>{
    return userModel.findById(id)
}

const getList = (id) =>{
    return listModel.find({userID:id})
}

const checkId = (id) =>{
    return listModel.findOne({_id : id})
}

const deleteList = (id) =>{
    return listModel.findByIdAndDelete(id)
}


const updateList = (id , body) =>{
    return listModel.findByIdAndUpdate(id , body,{new:true})
}

module.exports = {createList , findUser, getList , deleteList  , checkId, updateList}