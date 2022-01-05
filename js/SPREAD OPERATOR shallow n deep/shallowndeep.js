let a = 20;
console.log(a);
a=30;
console.log(a);

let b = 100;
console.log(b);
a=b;
console.log(a);
console.log(b);
b=200;

console.log(b);

console.log("------------------------------")

const person ={
    firstName:"tim",
    lastNmae:"him"
}
console.log(person.firstName)// tim
const personCopy = person;
console.log(personCopy.firstName)//tim

personCopy.firstName = "lee";
console.log(personCopy.firstName)//lee
console.log(person.firstName)// lee

const personCopyNew = personCopy;
personCopyNew.firstName = 'Guru';
console.log(person.firstName); //guru
console.log(personCopy.firstName); // guru
console.log(personCopyNew.firstName); // guru

let val = 20;
let val1 = 20;
//compares value
console.log(val===val1);// true
//compares the address of the object
console.log(person===personCopy) //true

const car ={
    carBrand: 'jaguar',
    moreDetails :{
        price:1000000
    }
}

const car1= {
    carBrand: "jaguar",
}
car1.moreDetails = car.moreDetails

//never ever compare the objects using strict equal to because it compares the address, 
//don't comapres the data.

console.log(car===car1);//false
console.log("-------------------------------")

console.log(car.moreDetails === car1.moreDetails) //true

console.log("-------------------------------")
console.log("-------------------------------")

const mobile ={
    price: 9000,
    brand:"MI"
}

// taking copy of mobile(addresswill be copied)
const mobileCopy = mobile;

//spread operator (...) ES6
//shallow copy(first level of properties will be copied)
const mobileCopyNew={...mobile}
mobileCopyNew.price = 40000;
console.log(mobileCopyNew.price); //40000
console.log(mobile.price);//9000
console.log(mobileCopy.price)//9000

console.log("--------------------------------");

mobile.brand = "samsung"
console.log(mobile.brand) // samsung
console.log(mobileCopy.brand) // samsung
console.log(mobileCopyNew.brand) // samsung

console.log("--------------------------------");

const movie ={
    movieName : 'Spiderman no way home',
    director: 'john watts',
    actor: 'Tom Holland',
    moreDetails:{
    budget: "200Million",
    heroin:"Zendya",
    villian: 'Goblin'
    }
}

//deepCopy
// taking miliple level copy usoing spread opeartor
const movieCopy ={
    ...movie,
    moreDetails:{...movie.moreDetails}
}

movieCopy.director='upendra'
console.log(movie.director) //john watts
console.log(movieCopy.director) // upendra 

console.log("-------------------------------------------")

movieCopy.moreDetails.heroin ="Ramya";
console.log(movie.moreDetails.heroin) // Zendya
console.log(movieCopy.moreDetails.heroin) //ramya

console.log(movie)
console.log(movieCopy)
console.log("-------------------------------------------")

const bike ={
    price:70000,
    brand: 'bajaj',
    bikeName: 'pulsar',
    engineDetails : {
        cc: "200cc",
        stroke: '4 stroke'
    }
}

//deep copy of an Object/Array
// all the levels of aobject/ array will be copied
//i.e , new object/array will be created
const bikeDeepCopy = JSON.parse(JSON.stringify(bike))
bike.engineDetails.cc = '250cc';
console.log(bike.engineDetails.cc); // 250cc
console.log(bikeDeepCopy.engineDetails.cc); // 200cc

console.log("----------------------")

const myObj = {
    firstName: "Chandan"
}

const myObj1 = {
    lastName: "C"
}
    // merge two objects using spread Operator
const myObj2= {
   ...myObj,
   ...myObj1
}

console.log(myObj2)