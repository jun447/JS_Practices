// write comparison operator with description
// 1. equal to (==)
// 2. not equal to (!=)
// 3. greater than (>)
// 4. less than (<)
// 5. greater than or equal to (>=)
// 6. less than or equal to (<=)
// 7. strict equal to (===)
// 8. strict not equal to (!==)

// comparing different data types with each other and their description
//
// console.log(null > 0)
// console.log(null < 0)
// console.log(null == 0)
// console.log(null >= 0) //is equal to console.log(0>=0)

/*
The equality operator == and comparisons > < <> <= >= work differently.
so comparison operators convert null to a number, treating it as 0.
That’s why null == 0 is false and null > 0 is false.
*/

/*
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined == 0)
* */

// strict equality operator (===) is a bit different. It doesn’t convert operands.
// If one of the operands is undefined or null, it returns false.
// That’s why the last line in the table above is false.
console.log(undefined === 0)
