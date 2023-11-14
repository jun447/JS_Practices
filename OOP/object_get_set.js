const User = {
    _firstName: 'John',
    _lastName: 'Doe',

    get firstName() {
        return this._firstName;
    },
    set firstName(value) {
        this._firstName = value;
    },
    get lastName() {
        return this._lastName;
    },
    set lastName(value) {
        this._lastName = value;
    }
}
//
// console.log(User.firstName);
console.log(User._lastName);//we assumed that we make it private actually is not we can access directly
console.log(User.lastName);

const haji = Object.create(User);
console.log(haji.firstName);