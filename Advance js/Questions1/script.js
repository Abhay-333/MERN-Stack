let user1 = {
  name: "Abhayt",
  email: "asd",
};
let user2 = {
  name: "vd",
  email: "asd",
};
let user3 = {
  name: "vfas",
  email: "asd",
};
let user4 = {
  name: "vfa",
  email: "asd",
};
let user5 = {
  name: "asd",
  email: "asd",
};

// console.log(user3)

class Users {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.greet = function () {
      console.log("Hello!" + name);
    };
  }

  // yaha per function banaun ga toh fir ye add hojaye ga prototype mey
}

let u1 = new Users("ABhays");
// u1.greet()
// console.log(u1)
let u2 = new Users("ABh");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.finalPrice = function () {
      return this.price - 100;
    };
  }

  // yaha per function banaun ga toh fir ye add hojaye ga prototype mey
}

let p1 = new Product("Pen", 1000);
// console.log(p1.finalPrice())

class Car {
  constructor(name, speed) {
    this.name = name;
    this.speed = speed;
    this.checkSpeed = function () {
      return this.name + " - " + this.speed;
    };
  }

  // yaha per function banaun ga toh fir ye add hojaye ga prototype mey
}

let c1 = new Car("Tarzan", 100);
let c2 = new Car("Honda", 200);
// console.log(c1.checkSpeed());

// 	8.	Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why. // output will be empty obj
class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
    this.introduce = function () {
      return this.name + " - " + this.roll;
    };
  }

  // yaha per function banaun ga toh fir ye add hojaye ga prototype mey
}

let st1 = new Student("asd", 10);


let obj = {
    sayName: ()=>{
     console.log(this)   
    },
    sayMyName: function(){
        console.log(this)
    }
}

// obj.sayName()
// obj.sayMyName()

// Create a User constructor function (do not use class syntax).
// bina classes ke syntax se bhi class banaii ja sakti hai js mey 

function Animal(val){
    this.name = val
    this.loggedIn = function(){
        console.log("loggedIN")
    }
}

// Animal.prototype.loggedIn = function(){
//     console.log("Asd");
// }

let obj1 = new Animal("ABhayasd");
let obj2 = new Animal("asdf");
// console.log(obj1.loggedIn === obj2.loggedIn)


let a1 = {
    name: "ABhayasd"
}

function abcd(a,b,c,d){
    console.log(this.name)
}

abcd.call(a1);
abcd.apply(a1,[1,25,5,26]);
let result = abcd.bind(a1,[1,25,5,26]);
console.log(result)