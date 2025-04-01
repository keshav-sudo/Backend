// const http = require("http");
// const fs = require("fs");

// const server = http.createServer((req, res) =>{

//                                     //downloading bad way
//     // const file = fs.readFileSync("sample.txt");
//     // res.end(file); 
//                                    //downloading with buffer or stream by pipeline

//     // const readableStream = fs.createReadStream("sample.txt");
//     // readableStream.pipe(res);
    
//                                //copy with bad way
//     // const file = fs.readFileSync("sample.txt");
//     // fs.writeFileSync("output.txt" , file);
//     // res.end();

// //     const readStream = fs.createReadStream("sample.txt");
// //     const writeStream =  fs.createWriteStream("output.txt");

// //     readStream.on("data", (chunk)=>{
// //         console.log("CHUNK :" , chunk)
// //         writeStream.write(chunk);
// //     })
// // });

//            //string processing


//     // const readStream = fs.createReadStream("sample.txt");
//     // const writeStream =  fs.createWriteStream("output.txt");

// server.listen(8000, ()=>{
//     console.log("srever is start");
// })






// //req= readablestream and res=writableestream
// //      readable <=== pipe ===> writeable