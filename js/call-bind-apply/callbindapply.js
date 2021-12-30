const person = {
    firstName : "Peter",
    lastName:"Don lee",
    getFullName: function(middleName){
        console.log(this);
        return`${this.firstName} ${middleName} ${this.lastName}`
    }
}

console.log("firstname -" , person.firstName);
console.log("lastname -",person.lastName);
console.log(person.getFullName('David'));
const john = {
    firstName: "john",
    lastName: "p"
}

console.log(john.firstName);
console.log(john.lastName);
console.log("---------------------------------------------")

//this will point to the object passes as first parameter to the call method
//Ex below - this will point to john object instead of person object
const johnFullName  = person.getFullName.call(john, 'Abram')
console.log("Full name",johnFullName )

const fullName  = person.getFullName.apply(john, ['Abram'])
console.log("Full name",fullName )


console.log("==========================================bind function=========================")


const teacher = {
    firstName:"ajith",
    lastName: "kumar",
    getFullName: function (age, subjects){
        console.log(this);
        console.log(subjects);
        return`${this.firstName}  ${this.lastName}`
    }
}

const guru ={
    firstName:"guru",
    lastName:"L"
}

/*
creat a copy of thw getFullname and it returns that function and this will
 be pointing to the object passed as first parameter
*/

const getFullNameFun = teacher.getFullName.bind(guru,10)
getFullNameFun(["English"])
getFullNameFun(["English" , "tamil"])
getFullNameFun(["English" , "Kannada" ])