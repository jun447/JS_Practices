let score= "100"
console.log(score)
console.log(typeof score)
let scoreNumber = Number(score)
console.log(typeof scoreNumber)
console.log(scoreNumber)

let score1= "100a"
console.log(score1)
console.log(typeof score1)
let scoreNumber1 = Number(score1)
console.log(typeof scoreNumber1)
console.log(scoreNumber1)

let score2= null
console.log(score2)
console.log(typeof score2)
let scoreNumber2 = Number(score2)
console.log(typeof scoreNumber2)
console.log(scoreNumber2)

let score3= undefined
console.log(score3)
console.log(typeof score3)
let scoreNumber3 = Number(score3)
console.log(typeof scoreNumber3)
console.log(scoreNumber3)

let score4= ""
console.log(score4)
console.log(typeof score4)
let scoreNumber4 = Number(score4)
console.log(typeof scoreNumber4)
console.log(scoreNumber4)

let score5= [1,2,3]
console.log(score5)
console.log(typeof score5)
let scoreNumber5 = Number(score5)
console.log(typeof scoreNumber5)
console.log(scoreNumber5)


// "100" -> 100
// "100a" -> NaN
// null -> 0
// undefined -> NaN
// false -> 0
// true -> 1
// "" -> 0
// [] -> 0
// [1,2,3] -> NaN
// {} -> NaN
// {name:'John'} -> NaN

// string conversion
// 100 -> "100"
// 100.123 -> "100.123"
// true -> "true"
// false -> "false"
// null -> "null"
// undefined -> "undefined"
// [] -> ""
// [1,2,3] -> "1,2,3"
// {} -> "[object Object]"
// {name:'John'} -> "[object Object]"
//

// boolean conversion
// "0" -> true

// [] -> true
// {} -> true
// 0 -> false
// 1 -> true
// -1 -> true
// null -> false
// undefined -> false
// NaN -> false
// "" -> false
