// class User {
//     constructor(username,email,password) {
//         this.email = email
//         this.password = password
//         this.username = username
//
//     }
//     encryptPassword() {
//         return `${this.password}123`
//     }
//     changeUsername(username) {
//         return `${this.username.toUpperCase()}`
//     }
// }
//
// const hai = new User('devjun','j@g.com','1a2c3')
// console.log(hai)
// console.log(hai.encryptPassword())
// console.log(hai.changeUsername())

//behind the scene of this class syntatic sugar
function User(username,email,password) {
    this.email = email
    this.password = password
    this.username = username
}
User.prototype.encryptPassword = function() {
    return `${this.password}123`
}
User.prototype.changeUsername = function(username) {
    return `${this.username.toUpperCase()}`
}
const chai = new User('devjun','j@g.com','1a2c3')
console.log(chai)
console.log(chai.encryptPassword())
console.log(chai.changeUsername())

