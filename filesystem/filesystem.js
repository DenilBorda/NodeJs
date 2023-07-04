// const {addition,multi} = require('./lib.js');
const fs = require('fs');

// console.log(addition(2,5));

// console.log(multi(2,5));



// ----- [File Open] -----

// fs.open('file.txt','w+',(err)=>{
//     if(err)
//     console.log(err);
//     console.log('File is Open......');
// })

// -----[file write method(async)]-----

// fs.writeFile('file.txt','How are You Guys ?',(err)=>{
//     if(err)
//     console.log(err);
//     console.log('file write.......');
// })

// file write sync(sync)
// const data ='welcome tp node js file system.....';
// let file = fs.writeFileSync('anc.txt',data)
// console.log('file is write.....');


// read(sync)
// const t1= performance.now();
// console.log(addition(2,5));
// let data = fs.readFileSync('anc.txt','utf-8')
// console.log(data);
// console.log(multi(5,3));
// const t2 = performance.now();
// console.log(t2-t1);


// async read file
// const t1 = performance.now();
// console.log(addition(2,5));
// fs.readFile('anc.txt','utf-8',(err,data)=>{
//     if(err)
//     console.log(err);
//     console.log(data);
// })
// console.log(multi(5,3));
// const t2 = performance.now();
// console.log(t2-t1);


// fs.appendFile('file.txt','Sujal is sleeping at that time ....',(err,data)=>{
//     if(err)
//     console.log(err);
//     console.log('data is updated .....');
// })


// fs.rename ('anc.txt','abc.txt',(err)=>{
//     if(err)
//     console.log(err);
//     console.log('file name changed.....');
// })


// fs.unlink('abc.txt',(err)=>{
//     if(err)
//     console.log(err);
//     console.log('file is deleted.....');
// })