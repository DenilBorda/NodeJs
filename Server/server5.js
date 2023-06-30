const http = require('http')
const server = http.createServer((req,res)=>{
    res.write("jemin vaydinooo che ");
    res.end();
});
server.listen(2113,(err)=>{
    if(err) throw err;
    console.log("Janki weds jemin");
});
