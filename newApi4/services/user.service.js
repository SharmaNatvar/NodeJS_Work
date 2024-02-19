const user = require("../model/user.model")


const getDataService = () =>{
    return user.find()
}


const postDataService = (body) =>{
    return user.create(body)
}


module.exports = {getDataService , postDataService}