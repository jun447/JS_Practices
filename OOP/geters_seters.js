class UserF{
    constructor(name, age){
        this.name = name;  //now this value is going to the set method
        this.age = age;
    }

    get name(){
        return `Get ${this._name.toUpperCase()}`;
    }
    //
    set name(value){
        if(value.length < 4){
            console.log("Name is too short.");
            return;
        }
        console.log("Set name called ")
        this._name = value;
    }
    // for age property
    get age(){
        return ` GET Age ${this._age}`;
    }
    set age(value){
        if(value < 0){
            console.log("Age can't be negative.");
            return;
        }
        this._age = value;
    }
}
const devjunior = new UserF("DevJunior", 25);
console.log(devjunior.name);
devjunior.name = "Devji";
console.log(devjunior.name);
console.log(devjunior.age);
