const { userModel } = require("../model")

const checkId = (id) =>{
    return userModel.findById(id)
}

const checkEmail = (email) =>{
    return userModel.findOne({email : email})
}

const userGet = ()=>{
    return userModel.find()
}


const userCreate = (body) =>{
    return userModel.create(body)
}


const userUpadate = (id , body) =>{
    return userModel.findByIdAndUpdate( id , body, {new:true})
}

const userDelete = (id)=>{
    return userModel.findByIdAndDelete(id )
}


module.exports = {checkEmail,checkId,userCreate,userDelete,userGet,userUpadate}