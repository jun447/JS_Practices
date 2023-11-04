 // Objects in Javascript
 // There are two ways to create objects in Javascript
    // 1. Object Literals
    // 2. Object Constructor
// 1. Object created with Constructor are singletons
// 2. Object created with Object Literals are not singletons

// 1. Object Literals
 const mySymbol = Symbol('mySymbol');
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    [mySymbol]: 'Je O Ghori dya Bachyia',
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// console.log(person.firstName);
// console.log(person["age"]);
// console.log(person[mySymbol]);
// console.log(person.fullName());

// Freezing an object
// Object.freeze(person);
// person.firstName = 'Ali';
// console.log(person.firstName); // John
