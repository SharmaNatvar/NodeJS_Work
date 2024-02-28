const { playerModel } = require("../model")

// check ID
const checkId = (id) =>{
    return playerModel.findById(id)
}

// check email
const checkEmail = (email) =>{
    console.log(email , 'email 0');
    return playerModel.findOne({email:email})
}


// create player
const postPlayer = (body) =>{
    console.log(body , 'create 0');
    return playerModel.create(body)
}

// get all
const getAllPlayer = () =>{
    return playerModel.find()
}


// update
const putPlayer = (id , body) =>{
    return playerModel.findByIdAndUpdate(id , body, {new:true})
} 


// delete 
const deletePlayerFun = (id) =>{
    return playerModel.findByIdAndDelete(id )
}


module.exports = {deletePlayerFun , putPlayer , getAllPlayer , postPlayer, checkEmail , checkId}