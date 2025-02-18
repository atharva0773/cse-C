const fspromise= require('fs').promises;

const write =async()=>{
 await fspromise.writeFile("./data2.txt","my name is Atharva","utf-8");
    
}
write();
console.log("1st");