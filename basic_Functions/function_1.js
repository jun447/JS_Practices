// function in js
// function to multiply two numbers
// function multiply(a, b) {
//     return a * b;
// }
// function to add two numbers
// console.log(multiply(2, 3));

//function with default parameters
// function def_multiply(a, b = 4) {
//     return a * b;
// }
// console.log(def_multiply(2)); // 2

// using rest parameters
// function addToCart(...items) {
//     return items;
// }
// console.log(addToCart('shirt', 'pant', 'shoes')); // [ 'shirt', 'pant', 'shoes' ]

// function to handle objects

// const cart = {
//     name: 'shirt',
//     price: 100,
// }
//
// function printCart(obj) {
//     return `The ${obj.name} costs ${obj.price}`;
// }
// console.log(printCart(cart)); // The shirt costs 100


// if (true) {
//  let a = 10;
//  const b = 20;
//  var c = 30;
// }

// console.log(a)
// console.log(b)
// console.log(c)
// The scope of var is global


// Nested SCoopes
// function outer() {
//     let a = 10;
//     function inner() {
//         let b = 20;
//         console.log(a)
//     }
//
//     // console.log(b)
//     inner();
// }
// outer()

//scope example using nested if else
// let a = 10;
// if (true) {
//     let b = 20;
//     if (true) {
//         let c = 30;
//         console.log(a + b + c);
//     }
//     // console.log(c) // not accessible
// }


console.log(addone(10))
function addone(num) {
    return num + 1;
}

// console.log(addTwo(10))// not accessible

const addTwo = function (num) {
    return num + 2;
}
console.log(addTwo(10))// accessible