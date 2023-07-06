const express = require('express');

const productRoute = require('./Routes/product.routes.js');

const server = express();
const port = 4000;
server.use(express.json());


// C R U D -> post , get , put/patch , delete 

server.use ('/api/product',productRoute)

server.listen(port,()=>{
    console.log(`server start at port ${port}`);
});