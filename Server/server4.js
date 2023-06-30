const http = require('http');
const server =http.createServer ((req,res)=>{
    res.write("Welcome to jemin community");
    res.end();
});
server.listen(1321,(err)=>{
    if(err) throw err;
    console.log("Jemin chalu thai gayo");
});