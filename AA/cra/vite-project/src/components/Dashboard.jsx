import React, { useState } from 'react'
function Dashboard(){
    const [data,setData]= useState("");
    function fetchData(){
   fetch('https://api.github.com/users/atharva0773')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
    setData(data)
})
.catch(e=> console.error('error:',e))
}

    return (<div>
        <h2>Welcome to Dashboard</h2>
        <h3>{data.login}</h3>
        <img src={data.avatar_url} alt="profile pic" />
        <h3></h3>
        <br />

        <button onClick={fetch}type="submit" class="btn btn-primary">Submit</button>
    </div>
    )

}
export default Dashboard