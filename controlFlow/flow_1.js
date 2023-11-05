// control flow in js
//
// const userLoggedIn = true;
// const debitCard = true;
//
// if (userLoggedIn && debitCard) {
//     console.log("You can make a purchase")
// }
//
// // switch case
// const grade = 'A';
//
// switch (grade) {
//     case 'A':
//         console.log("You got an A");
//         break;
//     case 'B':
//         console.log("You got an B");
//         break;
//     case 'C':
//         console.log("You got an C");
//         break;
//     case 'D':
//         console.log("You got an D");
//         break;
//     case 'E':
//         console.log("You got an E");
//         break;
//     default:
//         console.log("Not a valid grade");
// }
// // truthy and falsy values
// const userEmailAddress = "junaid@gmail.com";
// if(userEmailAddress) {
//     console.log("Email is present")
// }else{
//     console.log("Email is not present")
// }
// rules of truthy and falsy values
{//0,-0,BIGINT(0),0n
// Rule 1: All values are truthy unless they are defined as falsy
// Rule 2: "" is falsy
// Rule 3: 0 is falsy
// Rule 4: null is falsy
// Rule 5: undefined is falsy
// Rule 6: NaN is falsy
// Rule 7: false is falsy
// Rule 8: {} is truthy
// Rule 9: [] is truthy
// Rule 10: function(){} is truthy
// Rule 11: " " is truthy
// Rule 12: ' ' is truthy
// Rule 13: ` ` is truthy
// Rule 14: 1 is truthy
// Rule 15: 2 is truthy
// Rule 16: -1 is truthy
// Rule 17: 0.1 is truthy
// Rule 18: -0.1 is truthy
// Rule 19: Infinity is truthy
// Rule 20: -Infinity is truthy
// Rule 21: true is truthy
// Rule 22: false is falsy
// Rule 23: Symbol() is truthy
// Rule 24: Symbol('') is truthy
// and so on
}
{
// Nullish Coalescing Operator
// ?? operator
// it checks for null and undefined values
// if the value is null or undefined then it returns the default value
// otherwise it returns the value
// it is a short circuit operator
// it is a binary operator
// it is right associative
// it has the lowest precedence
// it is a logical operator
}
// let val1;
// // val1= 5 ?? 10;
// // val1= null ?? 10;
// // val1= undefined ?? 15;
// val1= null ?? 90 ?? 20;
// console.log(val1);

// ternary operator
// it is a short circuit operator

const price = 190;
price > 100 ? console.log("Price is greater than 100") : console.log("Price is less than 100");







