const name = 'Devjun'
const age = 24
const job = 'Web Developer'

// console.log(name + ' is ' + age + ' years old ' + job + '.') //old way

// Template String or String interpolation
// console.log(`${name} is ${age} years old ${job}.`) //new way

// using object to create template string

const myName = new String('Devjun1')

// console.log(name[0])
//
// console.log(myName[0])

console.log(myName.__proto__) //String.prototype methods can be access them without .__proto__

console.log(myName.toUpperCase())
console.log(myName)
