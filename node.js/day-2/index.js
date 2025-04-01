const { response } = require("express")
const fs = require("fs")
const http = require("http")
const PORT = 8080

const myserver = http.createServer((request , response) =>{
    const log = `${Date.now()}: & From ${request.url}  New Request Recieved\n`

    fs.appendFile("log.txt" , log , (err)=>{
        if(err){
            console.log("Error  writying to thrlog file" , err);
            response.statusCode = 500;
            return;
        }
        response.end("hello from server")
    })
     
  
})

myserver.listen(PORT , ()=>{
    console.log(`server is connected at ${[PORT]}`)
})