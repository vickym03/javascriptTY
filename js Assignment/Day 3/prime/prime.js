console.log("------------named function--------------------");


function primeNum (num){
    if(num<2)
    return(`${num} is a  NOT-Prime Number`)
    for(var i=2;i<num;i++)
    {
        if(num%i==0){
    return(`${num} is a  NOT-Prime Number`);
    }
    }
    return(`${num} is a Prime Number`);
}
var result=primeNum(-8);
console.log(result)

console.log("------------Anyo function--------------------");

var anyoFun = function primeNum (num){
    if(num<2)
    return(`${num} is a  NOT-Prime Number`)
    for(var i=2;i<num;i++)
    {
        if(num%i==0){
    return(`${num} is a  NOT-Prime Number`);
    }
    }
    return(`${num} is a Prime Number`);
}
var result1 = anyoFun(7);
console.log(result1)

console.log("------------IIFE function--------------------");

(
    function primeNum (num){
        if(num<2)
    console.log(`${num} is a  NOT-Prime Number`)
       else{
        for(var i=2;i<num;i++)
        {
            if(num%i==0){
                console.log(`${num} is a  NOT-Prime Number`);
        }
        }
        console.log(`${num} is a Prime Number`);
       }
    }
) (-7)


console.log("------------Arrow function--------------------");

var anyoFun =  (num)=>{
    if(num<2)
    return(`${num} is a  NOT-Prime Number`)
    for(var i=2;i<num;i++)
    {
        if(num%i==0){
    return(`${num} is a  NOT-Prime Number`);
    }
    }
    return(`${num} is a Prime Number`);
}
var result1 = anyoFun(7);
console.log(result1)
