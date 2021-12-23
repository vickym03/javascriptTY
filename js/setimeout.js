console.log("start -- js Func")

setTimeout(function(){
    console.log("ABC --- 2000 (web apis)")
},2000)

console.log("123  js Func")
setTimeout(function(){
    console.log("EFG --- 1000 (web apis)")
},1000)

setTimeout(function(){
    console.log("hij --- 0 (web apis)")
},0)

console.log("456 --- js Func")

console.log("end --- js Func")