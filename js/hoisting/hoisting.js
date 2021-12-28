console.log('a-', a); // undefined

var a= 10;  // global var
var b=19;  // global var
console.log('b outside function - ',b); //19

// first importance is give for local variable 


function test(){
    console.log("b inside function ", b) //undefined
     var b = 7;
    console.log("a inside function ", a) 
}
test();

console.log("========================")

add (10, 30);

function add(a, b){
    console.log(a+b); //40
}
console.log("---------------------")
//greet is delcared before the function 

// greet();  // greet is a not a function  
// var greet=function(){
//     console.log("welcome")
// }


 console.log("--------------------------")

 var product=(a,b)=>
     console.log(a*b)
 

 product(2,9); 18

 /* calling the arrow func before 
 assigning the func to variable will result in error i.e greet is not a function bcoz the product
 variable will be hoisted to the top as a product
 */