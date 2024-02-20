const user = require("../model/user.model")
const {userSchema} = require("../model/user.model")


const getDataService = () =>{
    return user.find()
}


const postDataService = (body) =>{
    return user.create(body)
}


const checkDeleteID = (id) =>{
    console.log( id , 'id check');
    // const _id = id
    // console.log( _id , '_id check');
    return user.findById(id)
}

const deleteUserData =(id)=>{
    console.log( id , 'id dele');
return user.findByIdAndDelete(id)
}

module.exports = {getDataService , postDataService , checkDeleteID , deleteUserData}