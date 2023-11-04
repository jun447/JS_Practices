// Dates

// 1. Create a variable with the current date and time in a readable format.
// let date = new Date()
// console.log(date)
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toISOString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toLocaleString())
// console.log(date.toUTCString())
// console.log(date.getUTCDate())
// console.log(date.getUTCDay())
// console.log(date.getUTCFullYear())
// console.log(date.getUTCHours())

// my date
// let myDate = new Date(2023, 1, 1)
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

//timestamp
// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor(myTimeStamp/1000))

// 2. Create a variable with the current date and time in a format suitable for use in a URL.
let date = new Date()
console.log(date.toLocaleString())
console.log(date.toLocaleString('default', { month: 'long' }))
