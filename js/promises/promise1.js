console.log("program started")

let age = 19;
const validAgePromise = new Promise((resolve,reject)=>{
    console.log(age);
    if(age>=18){
        resolve("Eligible for voting")
    } else{
        reject("not eleigible for voting")
    }
})

validAgePromise.then((success)=>{
    console.log(success);
})
validAgePromise.catch(err=>{
    console.log(err);
});

console.log("program ended")