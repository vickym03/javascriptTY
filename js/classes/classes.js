class Car{
    constructor(cname,year) {
        this.cname = cname;
        this.year = year
    }

getCarDetails(){
    return `${this.cname} manufactured in ${this.year}` 
}

}

const car1 = new  Car("BMW" , 2021)
console.log(car1.getCarDetails())

const car2 = new  Car("Alto" , 2019)
console.log(car2.getCarDetails())