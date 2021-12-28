let array = [23,87,90,54,990,90];

for(let res in array){
    console.log(array[res]+"---"+ res)
}

console.log("=============2")

let array2 = [23,87,90,54,'ben',990,90];

for(let res2 in array2){
    console.log(array2[res2]+"---"+ res2)
}

console.log("=============3")

let array3 = [23,87,90,54,"hello",90];

for(let res3 in array3){
    console.log(array3[res3]+"---"+ res3)
}
