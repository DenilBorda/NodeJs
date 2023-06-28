const express = require('express');
const server = express();
const port = 6060;

server.get('/',(req,res)=>{
    res.json('server started....');
})

server.listen(port,()=>{
    console.log(`server started ar ${port}`);
})