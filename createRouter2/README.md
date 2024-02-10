# Project Title

backend node learning

in this i use ejs in this we write html css and js  



const express = require('express')
const ejs = require('ejs')
const app = express()

app.set("view engine" , 'ejs')
app.use(express.static('./public'))


app.use(function(req , res , next){
    console.log('hay this is middlware');
    next()
})


app.get('/' , function(req,res){
    res.render('index')
})

app.get('/error',function(req,res){
    throw Error
})
app.get('/profile' , function(req,res){
    res.render('profile')
})

app.get('/profile/:users' , function(req,res){
    console.log(req.params.users);
    res.render('contact' , {nameUser : req.params.users})
    // res.send(`hay Mr.${req.params.users}`)
})

app.use(function errorHandler(err ,req ,res , next) {
    if(res.headerSent){
        return next(err)
    }    
    res.status(500)
    res.render('error' , {error : err})
})


app.listen(8000)