function Usre(name, age) {
    this._name = name;
    this._age = age;

    Object.defineProperty(this,'name' ,{
          get: function() {
            return this._name;
        },
        set: function(value) {
            this._name = value;
        }

    });
    Object.defineProperty(this,'age' , {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        }
    });
}

const hai = new Usre('Hai', 20);
console.log(hai.name);
console.log(hai.age);