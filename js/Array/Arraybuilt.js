var hobbies = ['eating', 'swimming', 'driving', 'coding', 'bird watching']; //5

console.log("==================PUSH===========")
var hobbiesLength = hobbies.push('Reading'); //6 
console.log("Hobbies after push", hobbies);
console.log("hobbiesLength", hobbiesLength);

console.log('hobbies', hobbies.push('painting')) //7

console.log("==================POP===========")
var deletElement = hobbies.pop(); //6 
console.log("Hobbies after pop", hobbies);
console.log("deletElement", deletElement);

//output
// ==================PUSH===========
// Arraybuilt.js:5 Hobbies after push (6) ['eating', 'swimming', 'driving', 'coding', 'bird watching', 'Reading']
// Arraybuilt.js:6 hobbiesLength 6
// Arraybuilt.js:8 hobbies 7
// Arraybuilt.js:10 ==================POP===========
// Arraybuilt.js:12 Hobbies after pop (6) ['eating', 'swimming', 'driving', 'coding', 'bird watching', 'Reading']
//0: "eating"1: "swimming"2: "driving"3: "coding"4: "bird watching"5: "Reading"length: 6[[Prototype]]: Array(0)
// Arraybuilt.js:13 deletElement painting


console.log("=============forEach=====");
 hobbies.forEach(function(value,index,arr){
     console.log(`${index}- ${value} -- forEach`);
 })

 console.log("========================unshift===============")

 const lenOfHobbies = hobbies.unshift('Gaming'); 
console.log("Hobbies after unshift", hobbies);
console.log("hobbies Length after unshift", lenOfHobbies);

console.log("========================shift===============")

const deletHobbies = hobbies.shift(); 
console.log("Hobbies after shift", hobbies);
console.log("hobbies Length after shift", deletHobbies);

console.log("========================Array.isArray===============")

const isHobbiesArray = Array.isArray(hobbies);
console.log('isHobbiesArray' , isHobbiesArray) // isHobbiesArray true

console.log("========================includes===============")

const isCodingPresent= hobbies.includes("coding", );
console.log('isCodingPresent' , isCodingPresent); // isCodingPresent true

console.log("========================indexOf===============")

const indexOfReading= hobbies.indexOf("coding" );
console.log('indexOfReading' , indexOfReading); // indexOfReading 3

console.log("=====================================================")
// splice

const numbers = [10,20,30,40,50];
console.log('numbers', numbers) // 
const deletElements = numbers.splice(2, 2,60,70,80)
console.log('deletedElements',deletElements)//30,40
console.log('numbers', numbers) // 10,20.60,70,80,50

console.log("---------------------------------------------")

//if we want to only add elements without deleting
//pass delete count as 0(second paramenter)

const deletElements1 =numbers.splice(1,0,100,110);
console.log('deletedElemts', deletElements1)
console.log("numbers" , numbers)

console.log("---------------slice method------------------------------")
// slice method
const nums =[10, 20, 30, 40 ,50]
const deletedNums = nums.slice(1,3) // 20, 30 
console.log('deletedNums', deletedNums);

//shallowcopy of copy

const numsCopy = nums.slice(0);
console.log('numsCopy', numsCopy); //10, 20, 30, 40 ,50
console.log('nums', nums) //10, 20, 30, 40 ,50
nums[0] = 1000;
console.log(nums[0]); //10000
console.log(numsCopy[0]); //10

//copy (address is copied)
const n =[10, 20];
const n1 = n;
n[0] = 90;
console.log(n[0]) //90
console.log(n1[0]) //90

console.log("===================Spread operator==========================")

const movies = ['spiderman', 'antman', 'Batman', 'Iranman'];
const moviesCopy = [...movies]
movies[0] = 'shakthiman'
console.log(movies[0]); // shakthiman
console.log(moviesCopy[0]) // Spiderman

console.log("==========================MAP")
 
const num = [100,200,300,400,500]
const newNumArray = num.map((value,index,arr)=>{
     return value+10

})
console.log(num) //[100, 200, 300, 400, 500]
console.log(newNumArray) //[110, 210, 310, 410, 510]

console.log("==========================FILTER")

const ageArr = [45,56,9,89,10,5];

const filterAges = ageArr.filter((value)=>{
    if(value>=18){
        return true
    }else{
        return false
    }
})
console.log(ageArr) //[45, 56, 9, 89, 10, 5]
console.log(filterAges)//[45, 56, 89]
console.log("=======================useing ARROW FUNCTIO")
const filterAgesArrow = ageArr.filter(value=>value>=18)
console.log(filterAgesArrow)//[45, 56, 89]


console.log("====================join");

const fruits =["banana", "pineapple", "green apple", "Custard apple"]
const fruitStr = fruits.join(", ");
console.log('fruitStr---', fruitStr)
//fruitStr--- banana, pineapple, green apple, Custard apple

const fruits1 =["banana", "pineapple", "green apple", "Custard apple"]
const fruitStr1 = fruits.join();
console.log('fruitStr---', fruitStr1)
//fruitStr--- banana,pineapple,green apple,Custard apple

