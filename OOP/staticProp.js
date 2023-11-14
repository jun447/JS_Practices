class UserOne {
   constructor(name) {
       this.name = name;
   }
   logMePlease() {
       console.log(`${this.name } logged In`);
   }
   static createID() {
       return Math.floor(Math.random() * 100);
   }
}
const devjun = new UserOne('devjun')
// console.log(devjun.createID());

class Teacher extends UserOne {
   constructor(name, age) {
       super(name);
       this.age = age;
   }
   // logMePlease() {
   //     console.log(`${this.name } logged In`);
   // }
   // static createID() {
   //     return Math.floor(Math.random() * 100);
   // }
}
const devjun2 = new Teacher('devjun2', 30)
// console.log(devjun2.logMePlease()); // 2 log will result undefined
devjun2.logMePlease()