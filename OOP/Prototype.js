let myName = 'hitesh'

// console.log(myName.length)

let myHeros =['thor','spiderman']

let heroPower = {
    thor:'hammer',
    spiderman:"sling",

    getHeroDetails: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}
Object.prototype.hitesh = function () {
    console.log(`Hitesh is present in all Objects`)
}
// heroPower.hitesh()
// myHeros.hitesh()
Array.prototype.heyDevJun = function () {
    console.log(`Array says hero`)
}

// heroPower.heyDevJun()
// myHeros.heyDevJun()
const User = {
    name:'chai',
    email:'taha@khan.com'
}

const Teacher = {
    makeVideo:true

}
const TeachingSupport= {
    isAvailable:false
}
const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//little bit modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

String.prototype.trueLength = function () {
    console.log(`this is This ${this}`) //give reference what is in name
    // console.log(`This is this.name ->${this.name}`)
    console.log(`True length is: ${this.trim().length}`)
}
// myName.trueLength()
"Khano ke Khan Taha Khan".trueLength()
"Prithvi Rag Chuhan".trueLength()
