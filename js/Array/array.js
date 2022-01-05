var nam = ['tim', 'lee', 'jack', 676, 878];

for (var i = 0; i < nam.length; i++) {
    // debugger
    console.log(i + " " + nam[i])
}


console.log("================")

// console.log(nam +"" +" Array elemnts")  ;
// console.log("================")


// console.log(nam[0]);
// console.log(nam[1]);
// console.log(nam[2]);
// console.log(nam[3]);
// console.log(nam[4]);
// // console.log(name.length(n-1) +" " +"Array Length");
// console.log(nam.length-1 +" " +"Array Length");

// console.log("================")

// var myArray = ['ajith', 34,  true , undefined , null , {color:"red"} , ["grill","lee" , 'red']];

// console.log(myArray[2]);  //true
// console.log(myArray[4]);  //null
// console.log(typeof myArray[3]) //undefined
// console.log(myArray.length); //7
// console.log(myArray[5].length); //undefined
// console.log(myArray[5].color); // red 
// console.log(myArray[5]['color']); // red
// console.log(myArray[5] ['co lor']); // undefined
// console.log(myArray[6].length); // 3
// console.log(myArray[6][0]);  // grill
// console.log(myArray[6] [2-1]); //lee

// console.log("================")

var books = [

    {
        author: 'cheatan bhagath',
        title: ' Two States',
        price: 80,
        noOfPages: 265,
        publishers: 'spana'
    },

    {
        author: ' Apj Kalam',
        title: ' Wings of fire',
        price: 425,
        noOfPages: 300,
        publishers: 'Abj'
    },

    {
        author: ' pooranaCharandra Tejaswi',
        title: ' Chidamabara rahasya',
        price: 600,
        noOfPages: 545,
        publishers: 'sanitya Bhandra'
    }
]

// console.log(books);

// for(var i=0; i<books.length;i++){
//     console.log(books[i].author)
// }

for (var book of books) {
    console.log(book.author);
}

// creating array using new keyword
var arr = new Array(10);
console.log(arr.length);
console.log(arr[0]);

console.log("--------------------------");

var number = new Array(20, 30, 40);
console.log(number.length);
console.log(number[0]);
console.log(number[1]);