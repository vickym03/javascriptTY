// string methods

console.log("===================toUpperCase")
const str ="hello"
const result = str.toUpperCase();
console.log(str)
console.log(result)

console.log("===================toLowerCase")

let greet = "GOOD AFTERNOON"
greet = greet.toLowerCase()
console.log(greet)

console.log("===================chartAt")

console.log(greet.charAt(13));

console.log("===================indexOf")
console.log(greet.indexOf('o', 3))


console.log("===================Concat")
const res = str.concat(', ', greet, " all")
console.log(res)

console.log("===================includes")
const hasNoon = greet.includes('noon')
console.log("hasNoon", hasNoon)

console.log("===================replace")
const value = greet.replace("afternoon", 'night');
console.log(value)

console.log("===================subStr")
// first is indx value and seconds counts till how many charts
const data= "hello all, Welcome to Javascript session";
const extStr = data.substr(11,10)
console.log(extStr)

// based on start and stop
const extString = data.substring(1, 4)
console.log(extString)

console.log("===================trim")
// removes the invalid spaces from before and after data . but not between the data

const email = '             chandan.k@testyantra.com       '
console.log("email", email)
const emailAfterTrim = email.trim()
console.log("emailAfterTrim-", emailAfterTrim)

let gmail = '             chandan.k@testyantra.com '
// removes the empty space from first to data    '
console.log("start--",gmail.trimStart())
// removes the empty space fromdata 
console.log("End-- ", gmail.trimEnd())

