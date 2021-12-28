
console.log("=======================map")
let arr1 = ["hello", "timm", "david", 90,78,123,00]
arr1.map((val,ind,ar)=>{
console.log(`${val}---- ${ind} `)
/*
hello---- 0 
timm---- 1 
david---- 2 
 90---- 3 
 78---- 4 
 123---- 5 
 0---- 6 
*/
})
console.log("=======================map")

let arr2 = [12,33,78,0,9,7,98,87,56,76,09]
arr2.map((val,ind,ar)=>{
    if(val>=12)
    console.log(`${val}---- ${ind} `)
})

/*
  12---- 0 
 33---- 1 
 78---- 2 
 98---- 6 
87---- 7 
56---- 8 
 76---- 9 
*/
console.log(arr2)//(11) [12, 33, 78, 0, 9, 7, 98, 87, 56, 76, 9]

console.log("======================Filter")

let arr3 = [2,44,7,88,24,77,01,100,9,3,13,15]
console.log(arr3)//(12) [2, 44, 7, 88, 24, 77, 1, 100, 9, 3, 13, 15]

arr3.filter((val,ind,ar)=>{
    while (val%2===0) {
        console.log(`${val}---${ind}`)
        break;
    }
});
/*
2---0
44---1
 88---3
 24---4
 100---7
*/

console.log(arr3)//(12) [2, 44, 7, 88, 24, 77, 1, 100, 9, 3, 13, 15]

console.log("-------------------------------------------------------")

let arr4 = [12,33.09,78,0.055,9,7,198.98,87,656.12,76,909]

arr4.filter((val,ind,ar)=>{
    do {
        console.log(`${val}---${ind} arr4`)
        break;
    } while (val%2!==0);

});
/*
12---0 arr4
 33.09---1 arr4
 78---2 arr4
 0.055---3 arr4
 9---4 arr4
 7---5 arr4
 198.98---6 arr4
 87---7 arr4
656.12---8 arr4
 76---9 arr4
909---10 arr4*/

console.log("======================Join")
let arrJ = arr1.join();
console.log(arrJ)//hello,timm,david,90,78,123,0

const arr4J = arr4.join("|| ")
console.log(arr4J) //12|| 33.09|| 78|| 0.055|| 9|| 7|| 198.98|| 87|| 656.12|| 76|| 909

console.log("=================================Reduce")


var numbers = [45, 4, 10, 16, 25];
var sum = numbers.reduce((total, value, index, array)=>{
 return(total + value)
  });
  console.log(sum)//100

  var names= ["tim","david","olol","poop","loke"]
  var sum1 = names.reduce((total, value, index, array)=>{
   return(total +value)
    });
    console.log(sum1)//timdavidololpooploke