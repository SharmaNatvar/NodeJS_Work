const express = require('express')
const route = express.Router()
const path = require('path')
const blogs = require('../data/blogs')


route.get('/' , (req , res)=>{
    res.render(path.join(__dirname, '../views/index'))
})


route.get('/blog' , (req , res)=>{
    res.render(path.join(__dirname, '../views/blogHome') ,{'blogData':blogs.data})
    // res.send('blogHome')
})

route.get('/blog/:slug' , (req , res)=>{
    const {slug} = req.params
    const myBlog = blogs.data.filter(e => {
        return e.slug === slug
    });
    res.render(path.join(__dirname, '../views/blogPage') ,{'blogData':myBlog})
})


module.exports = route