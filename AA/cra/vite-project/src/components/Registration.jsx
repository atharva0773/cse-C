import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
function Registration({regData}){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    function getData(e){
        e.preventDefault();
        const data={
            name,email,password
        }
        regData(data);
    }
    return (<div>
        <h2>Welcome to Registration</h2><form>
        <div class="form-group">
    <label for="name">Name</label>
    
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name"  onChange={(e)=>{setName(e.target.value)}}/>
    <small id="emailHelp" class="form-text text-muted"></small>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
   
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
  
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
  </div>
  <button onClick={getData} type="submit" class="btn btn-primary">Submit</button>
</form>
        
    </div>
    )
}
export default Registration;