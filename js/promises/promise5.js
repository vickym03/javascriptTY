console.log("Started")

const myPromise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([100,200,300,400,500])
    },3000)
})

const myPromise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve([600,100,1200])
    },5000)
})
/*
if all promises are resolved then function will be executed and 
it will combine the resolved data into array
if any one promise is rejected also catch function will be executed
*/

consol.log("----------------------------------promise.all")

Promise.all([myPromise1,myPromise2]).then((data) =>{
    console.log("data", data);
}).catch(err =>{
    console.log("Err", err)
})

console.log("------------------------promise.race");

Promise.race([myPromise1,myPromise2]).then((data) =>{
    console.log("data", data);
}).catch(err =>{
    console.log("Err", err)
})



console.log("ended")


