//closure

function outer(){
    let count =0
    function inner (){
        console.log("inner function");
        count = count + 1;
        console.log("count", count);
    }
    return inner
}

// only inner executes but not outer function
const innerfun = outer()
innerfun()
innerfun()
innerfun()
innerfun()

//function curring
 outer()()


 // wat is the use of clouser? why we use closure?
 //1. to oerserve the values
 //2. for data privacy

 function increaseCounter(){
     let counter = 0;
     function countUpadate(){
         counter = counter + 1;
         console.log(counter)
         return counter
     }
     return countUpadate
 }

 const countIncrease = increaseCounter()
 countIncrease()
 countIncrease()
 countIncrease()
 countIncrease()


//there is apossiblity count will be 0 if increaseVounter is callled again

const c = increaseCounter()
c()

// increaseCounter()()


//self invoking function will be executed only once hence counter count be reinitialized to 0
// agin only counterUpadate function will be able to chamge the counter variable value
const counterInc = ( function(){
    let counter = 0
    function countUpadate(){
        counter = counter+1;
        console.log(counter)
        return counter
    }
    return countUpadate
})() 
counterInc()
counterInc()
counterInc()


 
