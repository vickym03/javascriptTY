const person={
    name:"ajith",
    lastName:"k"
}

// spread operator uses (ES6 feature)
// 1. we can take shallow copy or deep copy
// 2. copy properties of one object/arry to another object/array
// 3. combine/merge two or more objects or two or more arrays
// 4. add new properties and take copy
// 5. change any property and take copy

const personCopy = {...person}
const address={
    pincode:560059,
    state: "karanataka",
    city:"bangalore"
}

const personDetails = {...person, ...address}
console.log(personDetails )

const personC= {...person, age:13}
console.log(personC)

const personD = {...person, lastName:"I"}
console.log(personD )


console.log("--------------------------------------------------------------")