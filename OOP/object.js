function mulby5(num) {
    return num*5
}

mulby5.power = 2
console.log(mulby5.power)
console.log(mulby5(8))
console.log(mulby5.prototype)
// so there are some by default context and this empty {} is this of that method
//prototype gives some propertes and some context along with methods
function createUser(username,score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function () {
    this.score++
}
createUser.prototype.printMe = function () {
    console.log(`${this.username} score is ${this.score}`)
}
const chai = new createUser("chai",25)
// To tell him new properties are injected we have to use new
const pati = new createUser("tea",300)

chai.printMe()
pati.printMe()
chai.increment()
chai.printMe()