function first (callBack){
    // console.log(callBack)
    setTimeout( ()=>{
        console.log("first executed");
        callBack();
    },0)
}

function second() {
    console.log("second executed")
}

 first(second);  // first exe 1st    second exe 2nd
// first(); 
// second();