const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("Welcome to Node Development Course");
    res.end();
}); 

server.listen(8293,(err)=>{
    if(err) throw err;
    console.log("Welcom to.........8293" );
});