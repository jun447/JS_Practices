// so there are several types of data types in JavaScript but in documentation the division is
// 1. primitive data types and 2. non-primitive data types
//  so there is a concept called by value and call by reference
//  primitive data types are call by value and non-primitive data types are call by reference
// so their difference is done on the basic of they are stored in memory and how you access them

// primitive data types are stored in stack and non-primitive data types are stored in heap
// so when we are using primitive data types we are actually using the value of the variable
// and when we are using non-primitive data types we are actually using the reference of the variable

//Primitive data types
// 1. Number// 2. String// 3. Boolean// 4. Undefined// 5. Null// 6. Symbol// 7. BigInt
// Non-primitive data types or reference data types
// 1. Array// 2. Object// 3. Function// 4. Set// 5. Map// 6. WeakMap// 7. WeakSet

// const nm =Symbol('name')
// const nm2 =Symbol('name')
// console.log(nm===nm2) //false

// Explaining reference data types

const vilan = ['Joker','Lex Luthor','Voldemort','Sauron']
const vilanObj = {name:'Joker',power:'Money'}
console.log(typeof vilan)

const myFn=function(){
    console.log('Hello')
}
console.log(myFn())