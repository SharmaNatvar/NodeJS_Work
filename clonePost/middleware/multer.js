const multer = require('multer')
const {v4:uuidv4} = require('uuid')
const path = require('path')


const storage = multer.diskStorage({
    destination:function(req,res,cd){
        cd(null , './public/image')
    },
    filename: function(req , file, cd){
        const uniqueFileName = uuidv4();
        cd(null , uniqueFileName+path.extname(file.originalname))
    }
})


const upload = multer({storage : storage})

module.exports = {upload}