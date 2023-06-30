const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("Welcome to Skillqode");
    res.end();
});

server.listen(2993,(err)=>{
    if(err) throw err;
    console.log("server Started..........at 2993")
})