let num = [12, 34, 545, 787, "tim", null, {firtsName:"John"}]

for(const arr1 of num){
    console.log(arr1)
}

console.log("================2=================")
let num2=[12,67,99,98,"Dim", true, {firtsName:"kim"}]

for(const arr2 of num2){
    console.log(arr2)
}

console.log("=================3================")
let num3=[12,00110,99,899,"David", undefined, {firtsName:"mike"}]

for(const arr3 of num3){
    console.log(arr3)
}

console.log("================4=================")
let num4=[12,00110,99,899,"David", undefined, {firtsName:"mike"}]

for(const arr4 of num4){
    console.log(arr4)
}

console.log("=============5====================")
let num5=[12,00110,99,899,"David",function(){return num5[4]}, {firtsName:"mike"}]

for(const arr5 of num5){
    console.log(arr5)
}

