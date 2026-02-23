// 1. **Create a function** that takes an array of numbers and returns only the numbers **greater than the average** of the array.
//    (Use functions + return + array methods)

function transformArray(arr) {
  let sum = 0;
  arr.forEach((elem, index) => {
    sum += elem;
    // console.log(sum)
  });
  let average = sum / arr.length;
  console.log();
  return arr.filter((elem) => (elem >= average ? elem : null));
}

// console.log(transformArray([4, 5, 26, 2, 6, 72, 7]))

// 2. Build a **theme switcher** (Light/Dark) using DOM where the selected theme is saved in **localStorage** and restored after refresh.
const themeBtn = document.querySelector("#themeSwitcher");
const body = document.querySelector("body");
console.log(themeBtn.textContent);
localStorage.setItem("theme", "Dark");

let currentTheme = localStorage.getItem("theme");

function themeSwitcher() {
  if (currentTheme === "Dark") {
    themeBtn.textContent = "Change to Dark";
    body.style.backgroundColor = "white";
    body.style.color = "black";
    localStorage.setItem("theme", "Light");
    currentTheme = "Light";
  } else {
    themeBtn.textContent = "Change to Light";
    body.style.backgroundColor = "black";
    body.style.color = "white";
    localStorage.setItem("theme", "Dark");
    currentTheme = "Dark";
  }
}

themeBtn.addEventListener("click", themeSwitcher);

// 3. Make a **div that rotates 360°** every time you double-click it, and the rotation count should be shown inside the div.
//    (Use events + CSS + DOM)

const box = document.querySelector(".box");
let count = 0,
  rotation = 0;
function rotateBox() {
  box.textContent = ++count;
  rotation += 360;
  box.style.transform = `rotate(${rotation}deg)`;
  // box.style.transform = "rotate(0deg)"
}
box.addEventListener("dblclick", rotateBox);

// 4. Create a function that mimics `Array.prototype.map()` **without using map**, and apply it to transform an array.
Array.prototype.customMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const result = [4, 5, 26, 2, 6, 72, 7].customMap((elem, index) => elem * index);
console.log(result);

// 7. Build a **live character counter** for a textarea.
//    - On typing → update count
//    - If count > 100 → show red warning text
const textarea = document.querySelector("textarea");
const p = document.createElement("p");

textarea.addEventListener("input", function (e) {
  console.log(e.target.value);
  p.style.color = "red";
  if (e.target.value.length > 100) {
    p.textContent = "Please enter character between 0 to 100";
  } else {
    p.textContent = "";
  }
});
body.appendChild(p);

// 8. Create a **product list filter**:
//    - Input box
//    - On typing → show only items whose name startsWith the input
//      (Use arrays, filter, startsWith, DOM)

const search = document.querySelector("#Search");
const select = document.querySelector("select");
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    rating: 4.3,
    stock: 120,
    brand: "LogiTechX",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 2499,
    rating: 4.6,
    stock: 75,
    brand: "KeyMaster",
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Footwear",
    price: 1999,
    rating: 4.2,
    stock: 50,
    brand: "RunFast",
  },
  {
    id: 4,
    name: "Cotton T-Shirt",
    category: "Clothing",
    price: 499,
    rating: 4.0,
    stock: 200,
    brand: "UrbanWear",
  },
  {
    id: 5,
    name: "Smartphone",
    category: "Electronics",
    price: 14999,
    rating: 4.7,
    stock: 35,
    brand: "TechNova",
  },
  {
    id: 6,
    name: "Backpack",
    category: "Accessories",
    price: 1299,
    rating: 4.4,
    stock: 90,
    brand: "CarryPro",
  },
  {
    id: 7,
    name: "Water Bottle",
    category: "Home & Kitchen",
    price: 299,
    rating: 4.1,
    stock: 300,
    brand: "HydroMax",
  },
];

search.addEventListener("input", function (e) {
  const value = e.target.value.toLowerCase();
  const result = products.filter((elem) => elem.name.toLowerCase().startsWith(value));
  select.innerHTML = ""
  
  result.forEach(function(product){
    const option = document.createElement("option");
    option.textContent = product.name
    select.appendChild(option);
  })
});

// 10. Create an object representing a user. Write a function that **clones the object without using spread**, updates one property, and returns the new object.

const user = {
  id: 101,
  username: "abhay_codes",
  fullName: "Abhay Sharma",
  email: "abhay@example.com",
  age: 20,
  isVerified: true,
  role: "student",
  address: {
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    pincode: "411001"
  },
  skills: ["JavaScript", "HTML", "CSS", "Java"],
  socialLinks: {
    github: "https://github.com/abhay",
    linkedin: "https://linkedin.com/in/abhay"
  },
  lastLogin: "2026-02-22T10:15:00Z"
};

function updateObj(key, value, newValue){
  const clone = Object.assign({},user)
  clone[key] = newValue
  return clone
}
console.log(updateObj("fullName", "Abhay Sharma", "Abhay Dhaneshwar"))