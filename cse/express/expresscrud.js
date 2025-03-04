import express from 'express'

const users=[{
    id: 1,
    "name": "Bhanu",
    age:18
}];
const port =4000;
const app=express()
app.get('/',(req,res)=>{
    res.send(users);
    
})
app.use(express.json());
app.post('/',(req,res)=>{
    const bodydata= req.body;
    console.log(bodydata)
    res.send("data is received successfully")
    
})
app.post('/api/users/',(req,res)=>{
    const newid=users.length>0?users[users.length -1].id +1:1;
    const {name,age}= req.body;
    users.push({id:newid,name,age});
    res.send("new user");

});
// for create
app.post('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(user => user.id == id);
    res.send(user);
    
});
// for update
app.patch('/api/updateusers/:id',(req,res)=>{
    const {id}=req.params;
    const {name}=req.body;
      const index =users.findIndex(user =>user.id==id)
      users[index].name = name;
    res.send("update successfully");

});
// for delete
app.delete('/api/deleteusers/:id',(req,res)=>{
    const {id}=req.params;
      const index =users.findIndex(user =>user.id==id)
      users.splice(index,1)
    res.send("delete successfully");

});
app.listen(port,()=>{
    console.log(`server runing at ${port}`)
})