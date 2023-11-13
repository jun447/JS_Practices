function SetUsername(username) {
    this.username=username
    console.log(`called`)
}

function createUser(username,email,password) {
    // SetUsername.call(username)
    SetUsername.call(this,username) // to hold thats reference
    // i will tell him use my this not your this , you this will die
    this.email = email
    this.password = password
}
const chai = new createUser('devjun','dev@jun.com','123')
console.log(chai)