const express = require('express');
const server = express();
const path = require('path');
const auth = require('./auth.js')


const filePath = path.join(__dirname);
console.log(filePath);

const middleware = (req,res,next)=>{
    if(!req.query.age){
        res.send('please Provide your ager....');
    }
    else if(req.query.age < 18){
        res.send('please Enter Your valid Age....');
    }
    else{
        next();
    }
}

// server.use(express.static(filePath));
server.use(express.json());
// server.use(middleware);

server.get('/',middleware,(req,res)=>{
    res.json({type:"get"});
});

server.put('/',(req,res)=>{
    res.json({type:"put"});
});

server.post('/',auth,(req,res)=>{
    res.json({type:"post"});
});

server.patch('/',(req,res)=>{
    res.json({type:"patch"});
});

server.delete('/',(req,res)=>{
    res.json({type:"delete"});
});

server.listen(1313,()=>{
    console.log('server started .....at 1313');
});