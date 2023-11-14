class User {
    constructor(username,email,password) {
        this.email = email
        this.password = password
        this.username = username

    }
    logMe() {
        console.log(`USERNAME is ${this.username} and EMAIL is ${this.email}`)
    }
}

class Teacher extends User {
    constructor(username,email,password,subject) {
        super(username,email,password) //now we dont need .call() and pass this to call
        this.subject = subject
    }
    logMe() {
        console.log(`USERNAME is ${this.username} and EMAIL is ${this.email} and SUBJECT is ${this.subject}`)
    }
    addCourse(course) {
        console.log(`Teacher ${this.username} has been added`)
    }
}

const chai = new Teacher('devjun','j@g.com','1a2c3','Math')
//console.log(chai)
// chai.logMe()
// chai.addCourse()
// chai.logMe()

const jun = new User('devjun','g@j.com','123')
// console.log(jun)
// jun.logMe()
// jun.addCourse() // this will not work because addCourse is not in User class
console.log(chai === jun) // false
console.log(chai === Teacher) // false
console.log(chai instanceof Teacher) // true
console.log(chai instanceof User) // true
console.log(jun instanceof Teacher) // false