


// import fs from 'fs'; 

// // fs.readFile('text.txt', 'utf8', (err, data) => {
// //   if (err) throw err;
// //   console.log(data);
// // });



// const content = 'This is the content to be written to the file.';

// fs.writeFile('Shahabaj.txt', content, (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File created and content written successfully.');
//   }
// });


// import os, { totalmem } from 'os'

// console.log('Plateform:-',os.platform())
// console.log("Release",os.release())
// console.log("HostName",os.hostname())
// console.log("CPUs",os.cpus())
// console.log("TotalMemory",os.totalmem() / 1024 ,'MB')
// console.log("FreeMemory",os.freemem()/1024,'MB')
// console.log("Network Interface",os.networkInterfaces())
// console.log("Constant",os.constants)

// import EventEmitter from 'events';

// const myData= new EventEmitter();

// function getData(){
//   console.log("Helloo friends")

// } 
// function number(){
//   console.log("intNumber")
// }
// myData.on('Awdiz',getData)

// myData.on('mynumber',number)

// myData.emit('Awdiz')
// myData.emit('mynumber')



// import http from 'http'

// const books=["abc", "pqr","stu", "xyz", ]

// const server=http.createServer((req,res)=>{
//   if(req.method==="GET" && req.url==="/api/books"){
//     res.end(JSON.stringify(books))
//   }else if(req.method==="GET" && req.url==="/api/OnePlus"){
//     res.end("Hii from OnePlus ")
//   }else{
//     res.end("method and url not fount")
//   }
// })

// server.listen(8000,()=>{
//   console.log("server is connected on port 8000")
// })


// console.log("hii 1")
// setTimeout(()=>{console.log("hii 2")},3000)
// setTimeout(()=>{console.log("hii 3")},400)
// console.log("hii 4")
// setTimeout(()=>{console.log("hii 5")},2000)


import  dotenv from 'dotenv'

dotenv.config()

console.log(process.env.My_Secret_Key)

console.log(process.env.My_Data)


console.log(process.env.MY_SECRET_DATA);

console.log(process.env.MY_KEY);