console.log("started")

new Promise(function(reslove, reject){
    if(10>4){
        console.log("success")
    } else{
        reject("error")
    }
}).then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err
        )
})
