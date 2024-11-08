// (call back hell) -----> problem


// function rollno(num,delay,nextrollno){
//     setTimeout(() => {
//         console.log("rollno:",num)
//         if(nextrollno)nextrollno()
        
//     },delay);
// }
//  rollno(12,1000, () =>{
//     rollno(13,2000, () =>{
//         rollno(14,3000, () =>{
//             rollno(15,4000, () =>{
//             });
//         });
//     });
//  });



// console.log("first")
// function rollno(num){
//     console.log("rollno:",12)
// }
// setTimeout(rollno,3000)
// console.log("third")



// ******************************************************
// promise--------------->

// function rollno(num,delay){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {                                           //resolve           ---> then
//             console.log("rollno:",num)                                 // reject ---> catch
//             resolve("succesfully done")
//             reject("error")
//     },delay) ; 
//     });
// }
//  rollno(12,1000).then(() =>{
//     rollno(14,2000).then(() =>{
//         rollno(15,3000).then(() =>{

//         });
//     });
//  });

//  rollno(17,7000).catch(()=>{

//  })
// function roll_no(num,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("roll. no is",num)
//             resolve()
//         },delay)

//     })
// }
// roll_no(121,1000).then(()=>{
//     roll_no(122,2000).then(()=>{
//         roll_no(123,3000).then(()=>{
//             console.log("viva Complete")
//         })
//     })
// })


// **********************************************
// async   await



// function roll_no(num,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("roll. no is",num)
//             resolve("succesfully")
//         },delay)

//     })
// }
// roll_no(121,1000).then(()=>{
//     roll_no(122,2000).then(()=>{
//         roll_no(123,3000).then(()=>{
//             console.log("viva Complete")
//         })
//     })
// }).catch(()=>{
//     console.log("error")
// })




//  async function getroll(){
//     await roll_no(121,1000)
//     await roll_no(122,1000)
//     await roll_no(123,1000)

// }
// getroll()


// 
// **********************************************
// function foodorder(item,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("food item is",item)
//             // resolve("succesfully")
//             reject("erroe")
//         },delay)
//     })
// }


// foodorder("burger",1000).then(()=>{
//     foodorder("pizza",2000).then(()=>{
//         console.log("order complete")
//     })
// })





// async function order() {
//     try{
//     await foodorder("burger",1000)
//     await foodorder("pasta",1000)
//     await foodorder("honey chilli",1000)
// }catch(error){
//     console.log("error")
// }   
// }
// order()


let b=fetch('https://api.github.com/users/atharva0773')
// b.then((data)=>{
//     return data.json()
// }).then((data)=>{
//     console.log(data)
//     console.log(data.login)
// })



async function getdata(){
   try{ const data= await b
    gd = await data.json()
    console.log(gd)
    }catch(error){
        console.log("error")
    }
}

getdata()