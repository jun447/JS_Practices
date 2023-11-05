// break and continue
// for (let i = 0; i <= 20; i++) {
//     if(i === 5) {
//         console.log('Five')
//         continue
//     }
//     console.log(`I ->  ${i}`)
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// for (const num of arr) {
//     console.log(num)
// }

// Maps
const map = new Map()
map.set('PAK', 'Pakistan')
map.set('IN', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('FR', 'France')

// console.log(map)

// for (const [key, value] of map) {
//     console.log(`${key} -> ${value}`)
// }
//

const lanObj = {
    PAK: 'Urdu',
    IN: 'Hindi',
    US: 'English',
    UK: 'English',
    FR: 'French'
}

// for (const key in lanObj) {
//     console.log(`${key} -> ${lanObj[key]}`)
// }

// iterate forin on an array
// const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// for (const key in arr) {
//     console.log(`${key} -> ${arr[key]}`)
// }

// for each loop on an array
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.forEach((value, index) => {
//     console.log(`${index} -> ${value}`)
// })
// arr.forEach((value, index) => (
//     console.log(`${index} -> ${value}`)
// ))
// printMe = (value, index,arr) => {
//     console.log(`${index} -> ${value} -> ${arr}`)
// }
//
// arr.forEach(printMe)

// const myLangObjArr = [
//     {
//         langName: 'JavaScript',
//         langType: 'Scripting',
//     },
//     {
//         langName: 'Python',
//         langType: 'Scripting',
//     },
//     {
//         langName: 'Java',
//         langType: 'Compiled',
//     }
// ]
//
// myLangObjArr.forEach( (item) => {
//     console.log(`${item.langName} and its type is ${item.langType}`)
// })

// const values = arr.forEach((value) => {
//       console.log(`${value}`)
//     //foreach reutrn undefined/nothing
// })
// console.log(values)



// const mrthanFive =arr.filter((value) => {
//     return  value > 5
// })
//
// console.log(mrthanFive)

// const newNums = arr.map((value) => {
//     return value * 2
// })
// console.log(newNums)

// chaining map and filter
// const newNums = arr.map((num) => (num * 2))
//     .map((num) => (num + 10))
//     .filter((num) => (num > 12))
//
// console.log(newNums)

// reduce function

const sum = arr.reduce((acc, curr) => {
    return acc + curr
}, 0)
console.log(sum)