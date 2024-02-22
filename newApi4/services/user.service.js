const user = require("../model/user.model")
const {userSchema} = require("../model/user.model")


const getDataService = () =>{
    return user.find()
}


const postDataService = (body) =>{
    return user.create(body)
}


const checkID = (id) =>{
    console.log( id , 'id check');
    return user.findById(id)
}

const deleteUserData =(id)=>{
    console.log( id , 'id dele');
return user.findByIdAndDelete(id)
}


const updateUserData = (id , body)=>{
    console.log(body,'body')
    return user.findByIdAndUpdate(id , body , {new:true})
}

module.exports = {getDataService , postDataService , checkID , deleteUserData , updateUserData}