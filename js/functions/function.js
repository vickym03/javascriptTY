  // named function

  function add(num1, num2){
    var sum = num1+num2;
    console.log("sum " , sum )
}
add(12, 76)
add(188, 01)

function findIsEligilibleForVoting (age){
    if(age>=18){
        return true
    } else{
        return false
    }
}

function printEligilibleForVoting(result){
    if(result === true){
        console.log('Eligible for Voting')
    } else{
        console.log(' Not-Eligible for Voting')
    }
}

var result= findIsEligilibleForVoting(23);
printEligilibleForVoting(result)


//Anonymous Function

var findProduct = function(a, b){
    return a * b
}

var productVal = findProduct(12,3);
console.log('product-', productVal ) // product- 36


// function inside a object 
var person ={
    testFun: function(){
        console.log("test Fun executed")
    }
}
person.testFun(); //test Fun executed

//Self invoking function IIFE


(
    function(a,b){
        var diff = a-b
        console.log('difference bwt a & b-' , diff  );
    }(50,30) // difference bwt a & b- 20

)

    // Arrow key Function

    var greet  = ()=>{
        console.log("Greet Function");
        console.log("Welcome")
    }
    greet() //Greet Function   Welcome

    var SquareOfNumber = num=>num*num
    var result = SquareOfNumber(2);
    console.log("result - ", result)  // result - 4

    // Arrow key with Parametre
    var calculateTotalPrice = (price,gstPer)=>{
        var totalPrice = (price*gstPer/100)+ price
        return totalPrice
    }

    var priceVal = calculateTotalPrice(300, 18)
    console.log('Total Price in GST : ',priceVal); //Total Price in GST :  354

