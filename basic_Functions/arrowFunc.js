//
// const user ={
//     name: 'John',
//     age: 25,
//     hello: function () {
//         console.log(`${this.name} is ${this.age} years old`)
//     }
// }
// user.hello()
// user.name = 'Bob'
// user.hello()
//
// console.log(this)
// so this in javascript gives us current context
// function thisTest() {
//     let a = 10;
//     // console.log(this.a) // undefined because a is not a property of this
//     // for now this is available in objects
//     // console.log(this)
// }
// thisTest()

// declaring arrow function
const addThree = (num1,num2) => {
    return num1 + num2;
}
console.log(addThree(10,20))
// implicit return arrow function
const addFour = (num1,num2) => num1 + num2;
console.log(addFour(90,20))

// in curly braces the return keyword is required
// in parentheses the return keyword is optional

const returnObj = () => ({name: 'John', age: 25})
console.log(returnObj())

