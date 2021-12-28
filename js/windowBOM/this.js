//global levl this is eqyal to window object
//this will always point to the current object
console.log(this);
console.log(window)
console.log(this===window)
console.log("==================")

const person ={
    firstName1 :"ajith",
    lastName1: "K",
    getFullName: function(){
        //this is person object
        console.log("this inside getFullName-", this);
        return this.firstName+ " "+this.lastName;
    }
}

person.getFullName()


function greet(){
    //this is equal to window object all the gobal propertites and function belong to window object
    //(greet will be invoked using window reference)
    console.log("this inside greet-", this);
    console.log('greet function');
}

window.greet()
greet();

console.log("-------------------------------")

const myObj ={
    getData : function(){
        function test(){
            //this is equal to window object because test() is not invoked bu any object reference
            console.log("this inside test function", this);
            console.log("test function")
        }
        test()
        return 100
    }
}
myObj.getData()

console.log("=====================================")
const myObj1 = {
    firstNameA :"vijay",
    lastNameA: "S",
    getResult:()=>{
        //this inside getResult-window refer to its parent context
        console.log("getResult", this)
    },
    getName:function(){
        const testA=()=>{
            //Arrow function will not have its own this. this will refer to its parent execution context
            console.log("this inside test", this)
            console.log("test function")
        }
        testA()
        return`${this.firstNameA} ${this.lastNameA}`
    }
}
myObj1.getName();
myObj1.getResult()

/*
1. this is global - window
2. this in named function which is declared in global level - window
3.this in named function which is invoked using object reference - current object
4. this in arroe function which is invoked using object reference - parent context object
5. a named function declared inside a function which is invokee usings object reference - window object 
6.an arrow function declored inside a function which is invoked using object reference - parent context object
*/