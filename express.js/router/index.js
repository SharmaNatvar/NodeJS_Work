const express = require('express')
const routes = express.Router()
const path = require('path')


routes.get('/',(req,res)=>{
    res.render(path.join(__dirname,'../views/index'))
})

routes.get('/about',(req,res)=>{
    res.render(path.join(__dirname,'../views/about'))
})


module.exports = routes