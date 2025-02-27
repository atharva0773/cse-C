import express from 'express'
const app=express()
const port=4000;
app.get("/",(req,res)=>{
    res.send("welcome to home")
});
app.get("/about",(req,res)=>{
    res.send("welcome to about")
});
app.get("/api/:name/:rollno",(req,res)=>{
    try{
        const data =req.params;
        res.send(`Welcome ${data.name}  and roll no is  ${data.rollno}`)

    }
    catch(error){
        console.log("error :",error.message)
    }
});

// http://localhost:4000/api?name=atharva&rollno=2200320100043
app.get("/api",(req,res)=>{
    try{
        const data=req.query;
        if(!data.name){
            res.send({status:404,message: "please eneter a name"})
        }
        else{
            res.send(`Welcome ${data.name}  and roll no is  ${data.rollno}`)
        }
    }
    catch(error){
        console.log('error')
    }
});
app.listen(port,()=>{
    console.log(`server running at ${port}`)
});