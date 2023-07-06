const express = require('express');
const server = express();

server.get('/user',(req,res)=>{
    res.send('Express....')
});

server.get('/html',(req,res)=>{
    res.sendFile('D:\\Node Js\\Express Js\\s.html');
});

server.listen(1321,()=>{
    console.log('Server Started.....');
});