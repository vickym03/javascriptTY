// semicolon is mandatory befor () if you are writing() next line after the executing my function

console.log("start");
(10==10?console.log("equal"):console.log("notequal"))

console.log("end");
console.log("--------------------------------------");

function test(){
    function inner(){
        console.log("inner function");
    }
    return inner
}
const val = test();
console.log(val);
val()

//function currying
test()();


//IIFE function
(
    function(){
        console.log("hello world")
    }
)()


