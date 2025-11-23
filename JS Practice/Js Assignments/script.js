// Level1
//  4. Use rest parameters to make a function that adds
//  unlimited numbers.
//  5. Create an IIFE that prints `"I run instantly!"`.
//  6. Make a nested function where the inner one prints a
//  variable from the outer one.
//  7. Create an array of 5 fruits. Add one at the end and
//  remove one from the beginning.
//  9. Create an object `person` with keys `name`, `age`,
//  and `city`, and print each key’s value.

//  4. Use rest parameters to make a function that adds
//  unlimited numbers.
function abcd(...nums) {
  let result = nums.reduce((acc, currentVal) => {
    return acc + currentVal;
  }, 0);
  return result;
}

const sum = abcd(1, 2, 3, 4);
console.log(sum); // give a semi-colon before using IIFE

//  5. Create an IIFE that prints `"I run instantly!"`.
(function a() {
  console.log("I run instantly");
})();

//  6. Make a nested function where the inner one prints a variable from the outer one.
function b() {
  let a = 24;
  function kuchbhi() {
    console.log(a);
  }
  kuchbhi();
}
// b()

//  7. Create an array of 5 fruits. Add one at the end and
//  remove one from the beginning.

let arr = ["fruits", "red", "asd", "vca", "fruitsggas"];
arr.push("ABhay");
arr.unshift("REwa");
console.log(arr);

//  9. Create an object `person` with keys `name`, `age`,
//  and `city`, and print each key’s value.
const obj = {
  userName: "Abhay",
  age: 22,
};

for (let key in obj) {
  console.log(obj[key]);
}

//  Level 2 – Functional Thinking & Logic Tasks
//  (Intermediate)

//  2. Create one pure function that always returns the same output for a given input, and one impure function using a global variable.

//  4. Demonstrate the difference between normal
//  function and arrow function when used as object
//  methods (the `this` issue).

//  8. Create an array of names and use `some()` and
//  `every()` to test a condition (e.g., all names longer than
//  3 chars).

//  9. Create an object `user` and test the behavior of
//  `Object.freeze()` and `Object.seal()` by
//  adding/changing keys.






//  2. Create one pure function that always returns the
//  same output for a given input, and one impure
//  function using a global variable.

// we have already declared pure function on line 15 named as abcd()
//example of impure function:
let a = 2;
function b() {
  a++;
  console.log(a);
}
b();

//  4. Demonstrate the difference between normal
//  function and arrow function when used as object
//  methods (the `this` issue).

let obj1 = {
  userName: "ABhay",
  a: function () {
    console.log(this);
  },
  b: function () {
    console.log(this);  // this will point to current object that is obj1
    function c(){
      console.log(this); // this will point to parent of current object matlab window ko
    }
    c()  
  },

  c: function () {
    console.log(this);  // to solve the problem that has occured in b function, we should always creat arrow functions in a object to avoid problem with this keyword 
    let d = ()=>{
      console.log(this); // this will point to parent of current object matlab window ko
    }
    d()
  },  
  abcd: () => {
    console.log(this);
  },
};

console.log(obj1.a())
console.log(obj1.b())
console.log(obj1.c())


//  8. Create an array of names and use `some()` and `every()` to test a condition (e.g., all names longer than 3 chars).
const arr1 = ["Abhay", "asd", "s", "kahs", 'j', "akls", "jk"]

const arr2 = arr1.some((item)=>item.length > 3)
const arr3 = arr1.every((item)=>item.length < 3)

console.log(arr3)

//  9. Create an object `user` and test the behavior of
//  `Object.freeze()` and `Object.seal()` by
//  adding/changing keys.

Object.freeze(obj)
obj.age = 10   // it will not allow you to change any property neither you can add any addition property to the object
obj.social = "Insta"
console.log(obj)

Object.seal(obj1)
obj1.userName = "Harsh"   // it will not allow you to change any property here you cannot add extra property
obj1.social = "Insta"
console.log(obj1)