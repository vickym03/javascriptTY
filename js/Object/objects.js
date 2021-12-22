var human = {
    firstName : 'tim',
    lastName: 'lee',
    Age: 34,
    Gender: 'male',
    getFullName : function (){
        return this. firstName  + " " + this.lastName  }		
        
        }
        
console.log(human)

console.log(human.firstName + " "+ "firstName")
console.log(human.lastName + " "+ "lastName")
console.log(human.Age + " "+ "Age")
console.log(human.getFullName() + " "+ "getFullName") 
console.log(human.Gender + " "+ "Gender")

console.log("--------------------------------")

var school = {
        color: 'blue',
        price: 300,
        'heig ht' : 20
}
console.log(school)
console.log(school.color +" "+ "Color");
console.log(school.price + " " + "price");
console.log(school['heig ht'] + " " + "height");

console.log(human['getFullName']()) // to execute a function

console.log("--------------------------------")


// creating objects using new keyword
var car = new Object()
	car.price = 4000000
        car.model = 2021
        car.brand = 'toyota'
        car.name= 'Fortuner'
        car.color = 'black'

        console.log(car);
        console.log(car.price + " "+ "price");
        console.log(car.model +" "+ "model");
        console.log(car.brand + " "+ "brand");
        console.log(car.name +" "+ "name");
        console.log(car.color + " "+ "color");