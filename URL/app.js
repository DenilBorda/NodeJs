const http = require('http');
const server = http.createServer();
const product = require('./data.json');

server.on('request',(req,res)=>{
   const item = req.url.split('/')

   if(item [1] === 'user'){
    res.end('Welcome to user page ');
   }

   else if(item[1] === 'admin'){
    res.end('welcome to admin page');
   }

   else if(item[1] === 'product'){
    
    if(item.length === 3){
        const Pid = item[2];
        res.end(JSON.stringify(product[Pid]));
    }
    else
    {
        res.end(JSON.stringify(product));
    }
   }
})

server.listen(1321,()=>{
    console.log('Server is start at http://localhost:1321 ');
})


// if(req.url === '/user'){
//     res.setHeader('content-type','text/HTML');
//     res.end('<h1> Hello </h1>');
// }
// else if(req.url === '/adm'){
//     res.setHeader('content-type','application/josn');
//     res.end('<h1> Denil </h1>');
// }
// else if(req.url === '/login'){
//     const data = JSON.stringify({id:1,name:'Denil',course:'BackEnd Developer'})
//     res.setHeader('content-type','application/json');
//     res.end(data);
// }