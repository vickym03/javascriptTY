//for of  Loop
var number = [10, 20, 30, 40, 50];
for(var num of number){
    console.log(num)
}

console.log("--------------------------------")

var fruits = ["apple", "pineapple", "banana", "mango"];
for(var fruit of fruits){
    console.log(fruit)
}
console.log("--------------------------------")

//for in loop

// for in loop with object
var person ={
    firstName: 'ajith',
    lastName:"kumar",
    age:56,
    gender:"male"
}

for(var val in person){
    console.log(`${val} ${person[val]}`)
    // console.log(  val +" "+person[val])
}

// for in loop with array
for(var index in number){
console.log(`value at index ${index}-${number[index]}`);
}

for(var i in fruits){
    console.log(fruits[i])
}

console.log("======test case==============")
function test(){
    console.log("test case start");
    if(3>3){
        console.log(i);
    } else{
        // break;
        /*breat statement can be used in loop or switch cases . it can't be used in function or if else condiation without loops*/
        console.log('break');
    }
    console.log("test case end");
}
test();

console.log("------------------------")
// for loop

var arr = [10, 20, 30, 40, 50, 60]
console.log(arr);
for(var i=0; i<arr.length;i++){
    console.log(`${i} - ${arr[i]}`);
}

console.log("------------------------")
// for in loop

for(var index in arr){
    console.log(`${index} - ${arr[index]}`);
}

console.log("------------------------")


var arrData = [10,20,30];
arrData[3]= 78;
arrData["price"]= 900;
console.log(arrData);

//ignores the string value in index place
for(var i=0; i<arrData.length;i++){
    console.log(`${i} - ${arrData[i]}`);
}

console.log("------------------------")
// Doesn't ignores the string value in index place
for(var i in arrData){
    console.log(`${i} - ${arrData[i]}`);
}

console.log("----------------------------")
var pens = [{
    brand:"parker",
    price:125,
    color:"black",
    type:"boll point"
},
{
    brand:"Reynolds",
    price:10,
    color:"blue",
    type:"boll point"
},
{
    brand:"cello",
    price:5,
    color:"black",
    type:" gell point"
}
]

for (var i=0;i<pens.length;i++){
    if(pens[i].price>5){
    console.log(pens[i]);
    }
 }
console.log("============for of loop")

for(var pen of pens){
    if(pen.price>5 && pen.type==="boll point"){
        console.log(pen)
    }
    
}
console.log("============for in loop")

for(var index in pens){
    if(pens[index].brand.length > 5 && pens[index].price >10 ){
        console.log(pens[index])
    }
}

