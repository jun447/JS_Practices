// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async or DB calls
//     setTimeout(function () {
//         console.log('Async Task is complete')
//         resolve() //now it will connect with then
//     },1000)
// })
// promiseOne.then(function () {
//     console.log('Promise consumed')
// })
// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('Async Task is complete')
//         resolve() //now it will connect with then
//     },1000)
// }).then(function () {
//     console.log('Promise consumed')
// })
//
// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve({username:'DevJun',email:'j@g.com'})
//     },1000)
// })
// promiseThree.then(function (user) {
//     console.log(user)
// })

// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error=false
//         if (!error){
//             resolve({username:'DevJun',email:'j@g.com'})
//         }else {
//             reject('Some Thing went Wrong')
//         }
//     },1000)
// })
// promiseFour.then(function (user){
//     console.log(user)
//     return user.username
// }).then(function (username) {
//     console.log(username)
// }).catch(function (error) {
//     console.log(error)
// }).finally(function () {
//     console.log('Ya wada wafa hua ya reject')
// })

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error=false
        if (!error){
            resolve({username:'Dev_Jun',email:'g@j.com'})
        }else {
            reject('Every Thing went Wrong')
        }
    },1000)
})
// async function takePromiseFive(){
//     try {
//         const response  = await promiseFive
//         console.log(response)
//     }catch (e) {
//         console.log(e)
//     }
// }
// takePromiseFive()

// async function getGithubUserData(name){
//    try {
//        const response = await fetch(`https://api.github.com/users/${name}`)
//        const userData = await response.json()
//        console.log(userData)
//    }catch (e) {
//        console.log(e)
//    }
// }
// getGithubUserData('jun447')

// fetch(`https://api.github.com/users/jun447`)
// .then(function(response){
//     return response.json()
// })
// .then(function (data) {
//     console.log(data)
// })
// .catch(function (e) {
//     console.log(e)
// })