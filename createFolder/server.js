const http = require('http')
const express = require('express')

const app = express()


http.createServer(app).listen(3003,()=>{
    console.log('server start');
})

