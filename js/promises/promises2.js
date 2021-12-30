console.log("program start")

let age = 0;
function agePromise(){
    return new Promise((resolve,reject)=>{
        console.log(age);
        if(age>=18){
            resolve("Eligible for voting")
        }else{
            reject("Not eligible for voting")
        }
    })
}

agePromise().then((success)=>{
    console.log(success);
}).catch(err =>{
    console.log(err);
})

function validateAge() {
    age= document.getElementById("age").value ;
    agePromise().then((success) =>{
        console.log(success)
    }).catch(err =>{
        console.log(err)
    })
}

console.log("program end")