//constructor function

function Car(cname , year){
    this.cname = cname;
    this.year = year;
   //console.log(this);
    this.getCarDeatails = function(){
        return `${this.cname} manufactured year is ${this.year}`
    }
}
// creats a blue print and alters based on the given parameter

const car1 = new Car ("BMW", 2021)
console.log(car1.getCarDeatails())

const car2 = new Car ("Jaguar", 2019)
console.log(car2.getCarDeatails())

const car3 = new Car ("Audi", 2020)
console.log(car3.getCarDeatails())