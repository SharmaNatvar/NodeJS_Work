const { userModel } = require("../model")
const passport = require("passport");


const localStrategy = require("passport-local")
passport.use(new localStrategy(userModel.authenticate()))



const checkName = (username) =>{
    return userModel.findOne({username : username})
}

const checkId = (id) =>{
    return userModel.findById(id)
}

const userPost = (body) =>{
    const userData = { username: body.username, email : body.email, fullname : body.fullname };
    return userModel.register(userData, body.password)
}

const allUserGet = () =>{
    return userModel.find().populate('posts')
}





module.exports = {checkId, checkName, userPost , allUserGet}