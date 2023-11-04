// Declaring an object via Object Constructor
// const person = new Object();
//
const fbUser = {
    firstName: 'Ali',
    lastName: 'Khan',
    age: 30,
    email: 'j@khan.com',
    fullname:{
        userflName:{
           firstName: 'Ali',
            lastName: 'Khan',
        }
    }
}
//
// console.log(fbUser.fullname.userflName.firstName);
// console.log(fbUser.fullname.userflName.lastName);

const obj1 = {1: 'a', 2: 'b', 3: 'c'};
const obj2 = {4: 'd', 5: 'e', 6: 'f'};
// const obj3 = Object.assign({},obj1, obj2);
// // if {} is not passed as first argument then obj1 will be modified
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
// obj1["1"] = 'z';
// console.log(obj1)
// console.log(obj3); // { '1': 'z', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// usingSpreadOperator
// const obj3 = {...obj1, ...obj2};
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

//create arrays of object named users
const users = [
    {
        id: 1,
        name: 'Ali',
        email: 'j@h.com',
        age: 30
    },
    {
        id: 2,
        name: 'Khan',
        email: 'k@j.com',
        age: 30
    },
    {
        id: 3,
        name: 'John',
        email: 'k#e.com',
        age: 30
    }
]
// console.log(users[1].email)
//
// console.log(fbUser)
// console.log(Object.keys(fbUser))
// console.log(Object.values(fbUser))
// console.log(Object.entries(fbUser))

console.log(fbUser.hasOwnProperty('firstName'))
