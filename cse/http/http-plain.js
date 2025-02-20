const http=require('http');
const fs = require('fs/promises');
const port= 3000;
const server = http.createServer(async(request,response)=>{
// response.statuscode=200;                                  (writeHead is combine method of statuscose and setHeader )
// response.setHeader('content-type','text/plain');
response.writeHead(200,{'content-type':'text/HTML' });
const readdata= await fs.readFile("./home.html","utf8");
response.end(readdata);                                                
});
server.listen(port,()=>{
    console.log(`server is running on this port : ${port}`)
});
