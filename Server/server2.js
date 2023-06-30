const http = require('http');
const server = http.createServer((req,res)=>{
    res.write("Welcom to SkillQode");
    res.end();
});

server.listen(2993,(err)=>{
    if(err) throw err;
    console.log("Welcom to 2993 server");
});