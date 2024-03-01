const { todoModel } = require("../model")


const checkId = (id) =>{
    return todoModel.findById(id)
}

const todoRead = () =>{
    return todoModel.find().populate('userId')
}

const getUsertodo = (id) =>{
    return todoModel.find({userId:{_id:id}}).populate('userId')
}

const todoCreate = (body )=>{
    return todoModel.create(body)
}


const todoUpdate = (id , body) =>{
    return todoModel.findByIdAndUpdate(id , body,{new:true})
}

const todoDelete = (id) =>{
    return todoModel.findByIdAndDelete(id )
}




module.exports = {checkId,todoCreate,todoDelete,todoUpdate,todoRead ,getUsertodo}