// console.log(Math.PI)
// const dscrptr = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(dscrptr)
//
// dscrptr.value = 5
// console.log(dscrptr)
// console.log(Math.PI)

const hai = {
    name: 'Hai',
    price: `1000`,
    isAvailable: true,
}
console.log(hai)
console.log(Object.getOwnPropertyDescriptor(hai, 'name'))
Object.defineProperty(hai, 'name', {
    writable: false,
    enumerable: true,
    // configurable: false,
})
console.log(Object.getOwnPropertyDescriptor(hai, 'name'))
name = 'Hai dep trai'
console.log(hai)
