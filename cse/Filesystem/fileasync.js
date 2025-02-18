const fspromise= require('fs').promises;

const read=async()=>{
    try{
        const data= await fspromise.readFile("./data.txt","utf-8");
        console.log(data)

    }
    catch(error){
        console.log(error);
    }
   
}
read();
console.log("1st");