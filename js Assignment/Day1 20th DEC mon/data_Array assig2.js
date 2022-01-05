console.log("================question 5==================")
console.log("...Array1  without NEW KEYWORD")
 var ar1 = ["tiger" , 090 , null, true, function(){return ar1[0]}, {key:"lock"}]
 for(var i=0; i<ar1.length-1;i++){
     console.log( i + " "+ ar1[i])
 }

 console.log("...Array2  without NEW KEYWORD")
 var ar2 = ["lion" , 000 ,undefined, false, function(){return ar2[0]}, {phone:"nokia"}]
 for(var i=0; i<ar2.length-1;i++){
     console.log( i + " "+ ar2[i])
 }

 console.log("...Array3  without NEW KEYWORD")
 var ar3 = ["dog" , 0110 , undefined, true, function(){return ar3[3]}, {phone:"iphone"}]
 for(var i=0; i<ar3.length-1;i++){
     console.log( i + " "+ ar3[i])
 }

 console.log("...Array4 without NEW KEYWORD")
 var ar4 = ["dog" , 10 , undefined, true, function(){return ar3[3]}, {phone:"iphone"}]
 for(var i=0; i<ar4.length-1;i++){
     console.log( i + " "+ ar4[i])
 }

 console.log("...Array5 without NEW KEYWORD")
 var ar5 = ["leopord" , 01010 , undefined, false, function(){return ar3[3]}, {phone:"Realme"}]
 for(var i=0; i<ar5.length-1;i++){
     console.log( i + " "+ ar5[i])
 }




 console.log("================question 6==================")
 



 console.log("...Array 1 using NEW KEYWORD")
         var arr1 = new Array(12 , "hello", true, "time" , {pen: "blue"} )
         for (var i=0;i<arr1.length;i++){
    console.log ( i + " "+ arr1[i] )
}

console.log("...Array 2 using NEW KEYWORD")
         var arr2 = new Array(143 , "byee", false , "houre" , {car: "benz"} )
         for (var i=0;i<arr2.length;i++){
    console.log ( i + " "+ arr2[i] )
}
console.log("...Array 3 using NEW KEYWORD")
         var arr3 = new Array(767 , "MS dhoni", true, "Second" , {laptop: "Dell"}, function(){ return arr3[4] })
        //  console.log(typeof(arr3[5]()) +" function ---")
        console.log('hgjhgjh',arr3[5]());  
         for (var i=0;i<arr3.length;i++){
    console.log ( i + " "+ arr3[i] )
}

console.log("...Array 4 using NEW KEYWORD")
         var arr4 = new Array(77 , "S Raina", undefined, "fifth" , {laptop: "HP"}, function(){ return arr4[3] })
        //  console.log(typeof(arr4[5]) +" function ---")
         for (var i=0;i<arr4.length;i++){
    console.log ( i + " "+ arr4[i] )
}

console.log("...Array 5 using NEW KEYWORD")
         var arr5 = new Array( 08 , "Virat", null, "third" , {laptop: "lenovo"}, function(){ return arr5[3] })
        //  console.log(typeof(arr5[5]) +" function ---")
         for (var i=0;i<arr5.length;i++){
    console.log ( i + " "+ arr5[i] )
}


        console.log("================question 7==================")
        var systemDate1 = new Date('September 12 2020');
var dayVal = systemDate1.getDay();
var monVal = systemDate1.getMonth();
var yearVal = systemDate1.getFullYear();
var dateVal = systemDate1.getDate();

var months = ["Jan", "Feb", "March", "April", "May", "june", "July", "August", "September", "october", "November", "December"];
var monthData = months[monVal];

var weekDays =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var weekData = weekDays[dayVal];

console.log(`${weekData}, ${monthData} ${dateVal} ${yearVal}`)

// new array of object 
var ar = new Array(2)
ar[0] = {
    name :"vky",
    class : 12
}
ar[1] = {
    name :"tym",
    class : 11
}

console.log(ar)