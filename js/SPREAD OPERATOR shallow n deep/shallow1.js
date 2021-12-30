const books= [
    {
        tittle: "harry potter",
        price:90,
        author: "J K rowling"
    },
    {
        tittle: "Indian constitution",
        price:720,
        author: "lakshmi"
    },
    {
        tittle: "wings of fire",
        price:150,
        author: "ABJ Abdul Kalam"
    }
]
//reference book
// const bookCopy = books
// console.log(books===booksCopy); //true

// const booksCopy =[...books]
// console.log(books===booksCopy); //false
// console.log(books[0]===booksCopy[0]); // true

// books[0].price =100;
// console.log(books[0].price); //100
// console.log(booksCopy[0].price); //100

// const booksCopy = books.map(book=>{
//     return{...book}
// })

// console.log(booksCopy);
// console.log(books[0]===booksCopy[0]); //false

// books[0].price = 100;
// console.log(books[0].price); //100
// console.log(booksCopy[0].price); //90

const bookWithGst = books.map(book=>{
    book.price=book.price*0.18 +book.price
    return book
})
console.log(bookWithGst) 

console.log("=========================deep copy using spread operator")

const bookWithGstDeepCopy = books.map(book=>{
   const b ={...book}
   b.price = b.price*0.18 + b.price
    return b
})
console.log(bookWithGstDeepCopy);
console.log(books)

console.log("=========================deep copy using spread operator  ")
const products = [
    {
    productName : 'lipstick',
    price:999,
    brand:"Maybeline"
    },
    {
        productName : 'eyeLiner',
        price:500,
        brand:"lakme"
        },
        {
            productName : 'Trimmer',
            price:1000,
            brand:"MI"
            },
            {
                productName : 'beardo Oli',
                price:260,
                brand:"Beardo"
                }
]

const productsWithGst = products.map(product=>{
    const productCopy ={...product}
   productCopy.price = productCopy.price *0.03 +productCopy.price
    return productCopy
})

console.log(productsWithGst);
console.log(products)

console.log("================filter the price above 500 ")

const fill = products.filter(product=>product.price>500)
 console.log(fill)





 