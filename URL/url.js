const url = require('url');
const http = require('http');

const server = http.createServer();

server.on('request',(req,res)=>{
const d = url.parse(req.url,true).query;
console.log(d);
if(d.uname === "admin" && d.password === "admin"){
    res.write('Login success...');
}
else{
    res.write('Login Fail...');
}
res.end();
});

server.listen(2113,()=>{
    console.log('Server started at 2113');
})