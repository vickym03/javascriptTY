
// function second() {
//     console.log("second executed")
// }
// console.log("we")
// function first (callBack){
//     // console.log(callBack)
//     setTimeout( ()=>{
//         console.log("first executed");
//          callBack();
//     },1000)
// }
// console.log("end")

//  first(second);  // first exe 1st    second exe 2nd
// // first(); 
// // second();

function sec (call){
    console.log("sec")
    call()
}

function fir(){
    setTimeout(()=>{
        console.log("fir")
       
    },3000)
    
}

// fir(sec)
sec(fir)