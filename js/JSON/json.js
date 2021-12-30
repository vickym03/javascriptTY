const obj={
    firstName:"Tim",
    lastName:"David",
    age:13,
    isAdult:false,
    hobbies:["cricket","singing"],
    address:{
        pinCode:560054,
        state:"karantaka",
        city:"banglaor"
    }
}

console.log("Javascript to JSON")
const stringifyJson =JSON.stringify(obj)
console.log(stringifyJson)
console.log( typeof stringifyJson)

console.log(" JSON  to Javascript ")
console.log(JSON.parse(stringifyJson))