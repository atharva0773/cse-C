const http =require('http');
const users =[
    {id:1,name:'atharva',email:'atharva@gmail.com'},
    {id:2,name:'rahul',email:'rahul@gmail.com'},
    {id:3,name:'ravi',email:'ravi@gmail.com'}]

const server =http.createServer((req,res)=>{
 res.writeHead(200,{"content-type":"application/json"});
 const namedata=users.map((user)=>{
 return user.name
 })
 res.end(JSON.stringify(namedata))    // string ->>> object  ==>use JSON.parse
});                                //object ->>>string   ===>   JSON.stringfy
const port=4000;

server.listen(port,()=>{
    console.log(`server is running on this port : ${port}`)
}); 