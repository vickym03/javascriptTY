console.log("------------------Object destructuring---------------------")
const person= {
    firstName: " ajith",
    lastName: 'k',
    age:10,
    hobbies: ["cricket", "singing"],
    address : {
        state: "karanataka",
        pincode: 560054,
        city: "bangalore"
    }
}

// object destructuring ES6 feature
const {firstName, lastName } =person;
console.log("firstname",firstName)
console.log("lastname", lastName)

//multi level

const {hobbies, address: {state, city}} =person;
console.log("hobbies",hobbies )
console.log("state",state )
console.log("city",city )


//alias names

const {firstName: fname, lastName: lname} = person;
console.log(fname)
console.log(lname)

function calculateTotalPrice ({gst, price}) {
    console.log("gst" , gst)
    console.log("price", price)
    return price +(price* (gst/100))
}

const product = {
        price: 100,
        gst:3,
        productName:"bag",
        mfgYear:2021,
        moreDetails :{
            brand:"wildcraft",
            color:"red"
        }
}

let res = calculateTotalPrice(product)
console.log(res)


console.log("------------------Array destructuring---------------------")

const fruits =["apple", "mango", "banana", "green-apple", "orange"];

// const fruits1 = fruits[0];
// const fruits2 = fruits[1];

//Array destructuring

const [fruits1 , fruits2] = fruits;
console.log(fruits1)
console.log(fruits2)
console.log("---------------------------------------------")


const[fruitOne, fruitTwo] = fruits
console.log(fruitOne)
console.log(fruitTwo)
console.log("---------------------------------------------")