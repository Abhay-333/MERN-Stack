# 1. JavaScript Event Loop

## What is the Event Loop?

The **Event Loop** is a mechanism in JavaScript that allows **asynchronous operations** to run without blocking the main thread.

JavaScript is **single-threaded**, meaning it can execute **only one task at a time**.

The event loop manages how asynchronous tasks like:

- `setTimeout`
- `Promises`
- `fetch`
- `DOM events`

are handled without blocking the program.

---

## JavaScript Execution Components

JavaScript runtime mainly has:

1. **Call Stack**
2. **Web APIs**
3. **Callback Queue**
4. **Microtask Queue**
5. **Event Loop**

### 1. Call Stack

The **Call Stack** keeps track of currently executing functions.

Example:

```
functionfirst(){
second();
}

functionsecond(){
console.log("Hello");
}

first();
```

Execution order in stack:

```
first()
second()
console.log()
```

---

### 2. Web APIs

Web APIs handle asynchronous tasks like:

- setTimeout
- fetch
- DOM events

These APIs are provided by the **browser or Node.js environment**, not JavaScript itself.

Example:

```
setTimeout(() => {
console.log("Hello");
},2000);
```

Here the timer runs in **Web API environment**.

---

### 3. Callback Queue

When asynchronous tasks finish, their callbacks go into the **Callback Queue**.

Example:

```
setTimeout(() => {
console.log("Timer done");
},2000);
```

After 2 seconds → callback moves to **callback queue**.

---

### 4. Microtask Queue

Microtask queue has **higher priority than callback queue**.

Examples of microtasks:

- `Promise.then()`
- `Promise.catch()`
- `MutationObserver`

Example:

```
Promise.resolve().then(() =>console.log("Promise"));
```

---

### 5. Event Loop

The **Event Loop constantly checks**:

1. Is the **call stack empty?**
2. If yes → move tasks from **microtask queue**
3. Then move tasks from **callback queue**

Priority:

```
Call Stack
↓
Microtask Queue (Promises)
↓
Callback Queue (setTimeout etc)
```

---

## Event Loop Example

```
console.log("Start");

setTimeout(() => {
console.log("Timer");
},0);

Promise.resolve().then(() => {
console.log("Promise");
});

console.log("End");
```

Output:

```
Start
End
Promise
Timer
```

Explanation:

1. `Start` → runs first
2. `End` → runs second
3. Promise → microtask queue
4. setTimeout → callback queue

Microtasks run **before callbacks**.

---

# 2. Promises

## What is a Promise?

A **Promise** is an object representing the **eventual completion or failure of an asynchronous operation**.

It allows handling asynchronous operations in a **clean and structured way**.

Example:

```
constpromise=newPromise((resolve,reject) => {
letsuccess=true;

if(success){
resolve("Task completed");
  }else {
reject("Task failed");
  }
});
```

---

## Promise States

A promise has **3 states**:

| State     | Meaning                          |
| --------- | -------------------------------- |
| Pending   | Initial state                    |
| Fulfilled | Operation completed successfully |
| Rejected  | Operation failed                 |

Example lifecycle:

```
Pending → Fulfilled
Pending → Rejected
```

---

## Promise Example

```
constpromise=newPromise((resolve,reject) => {
setTimeout(() => {
resolve("Data received");
  },2000);
});

promise.then(data =>console.log(data));
```

Output after 2 seconds:

```
Data received
```

---

# 3. Promise Handlers

Promise handlers are methods used to handle the result of a promise.

Main handlers:

- `.then()`
- `.catch()`
- `.finally()`

---

# 4. `.then()` Method

`.then()` is used when a promise is **resolved successfully**.

Syntax:

```
promise.then(onSuccess,onFailure)
```

Usually we only pass the success function.

Example:

```
constpromise=Promise.resolve("Hello");

promise.then(result => {
console.log(result);
});
```

Output:

```
Hello
```

---

## Promise Chaining

`.then()` returns a **new promise**, which allows chaining.

Example:

```
Promise.resolve(2)
.then(num =>num*2)
.then(num =>num*3)
.then(result =>console.log(result));
```

Output:

```
12
```

Explanation:

```
2 → 4 → 12
```

---

# 5. `.catch()` Method

`.catch()` handles **errors or rejected promises**.

Syntax:

```
promise.catch(errorHandler)
```

Example:

```
constpromise=newPromise((resolve,reject) => {
reject("Something went wrong");
});

promise
.then(result =>console.log(result))
.catch(error =>console.log(error));
```

Output:

```
Something went wrong
```

---

# 6. Error Handling in Promises

Errors inside `.then()` are also caught by `.catch()`.

Example:

```
Promise.resolve("Start")
.then(result => {
thrownewError("Error occurred");
})
.catch(err =>console.log(err.message));
```

Output:

```
Error occurred
```

---

# 7. `.finally()` Method

`.finally()` runs **after promise completion**, whether resolved or rejected.

Example:

```
Promise.resolve("Success")
.then(res =>console.log(res))
.catch(err =>console.log(err))
.finally(() =>console.log("Done"));
```

Output:

```
Success
Done
```

---

# Promise Flow Example

```
fetch("https://api.example.com/data")
.then(response =>response.json())
.then(data =>console.log(data))
.catch(error =>console.log(error))
.finally(() =>console.log("Request finished"));
```

Flow:

```
Request → Promise
↓
.then() → success
↓
.catch() → error
↓
.finally() → always runs
```

---

Displaying day 35.md.

# 1. Types of Functions in JavaScript

JavaScript supports different ways to create functions.

## 1. Function Declaration

A function defined using the `function` keyword.

**Syntax**

```
functiongreet() {
console.log("Hello");
}
greet();
```

**Characteristics**

- Hoisted (can be used before declaration)
- Named function

---

## 2. Function Expression

A function stored inside a variable.

```
constgreet=function() {
console.log("Hello");
};
greet();
```

**Characteristics**

- Not hoisted like function declarations
- Can be anonymous

---

## 3. Arrow Function

Introduced in ES6. Shorter syntax.

```
constgreet= () => {
console.log("Hello");
};
```

**Single line**

```
constadd= (a,b) =>a+b;
```

**Characteristics**

- No `this` binding
- Short syntax
- Cannot be used as constructor

---

## 4. Anonymous Function

A function without a name.

```
setTimeout(function() {
console.log("Hello");
},1000);
```

---

## 5. Immediately Invoked Function Expression (IIFE)

A function that runs immediately after it is defined.

```
(function() {
console.log("I run immediately");
})();
```

Used for:

- Creating private scope
- Avoiding global variables

---

# 2. Closures

A **closure** is when a function remembers variables from its **outer scope** even after the outer function has finished executing.

### Example

```
functionouter() {
letcount=0;

returnfunctioninner() {
count++;
console.log(count);
  };
}

constcounter=outer();
counter();// 1
counter();// 2
```

### Why Closures Work

Because JavaScript functions remember the **lexical environment** where they were created.

### Use Cases

- Data privacy
- Function factories
- Memoization
- Event handlers

---

# 3. Higher Order Functions (HOF)

A **Higher Order Function** is a function that:

1. Takes another function as an argument

   OR

2. Returns another function

### Example 1: Function as Argument

```
functiongreet(name) {
return"Hello "+name;
}

functionprocessUserInput(callback) {
constname="Anubhav";
console.log(callback(name));
}

processUserInput(greet);
```

### Example 2: Returning a Function

```
functionmultiplier(x) {
returnfunction(y) {
returnx*y;
  };
}

constdouble=multiplier(2);
console.log(double(5));// 10
```

### Common HOFs in JavaScript

- `map()`
- `filter()`
- `reduce()`
- `forEach()`

Example:

```
constnums= [1,2,3,4];

constresult=nums.map(n =>n*2);
console.log(result);// [2,4,6,8]
```

---

# 4. Rest Operator (`...`)

The **rest operator** collects multiple values into a single array.

### Example

```
functionsum(...numbers) {
returnnumbers.reduce((acc,val) =>acc+val,0);
}

console.log(sum(1,2,3,4));// 10
```

Here:

```
...numbers → collects arguments into an array
```

### Characteristics

- Used in function parameters
- Must be the **last parameter**

Example:

```
functiontest(a,b, ...rest) {
console.log(rest);
}

test(1,2,3,4,5);// [3,4,5]
```

---

# 5. Spread Operator (`...`)

The **spread operator** expands elements of arrays or objects.

### Example (Array)

```
constarr1= [1,2,3];
constarr2= [...arr1,4,5];

console.log(arr2);
// [1,2,3,4,5]
```

### Example (Object)

```
constobj1= {name:"Anubhav"};
constobj2= {...obj1, age:24};

console.log(obj2);
```

### Uses

- Copy arrays
- Merge arrays
- Copy objects
- Merge objects

---

# 6. Shallow Copy

A **shallow copy** copies only the first level of an object.

Nested objects still reference the **same memory**.

### Example

```
constobj1= {
  name:"Anubhav",
  address: {
    city:"Bhopal"
  }
};

constobj2= {...obj1};

obj2.address.city="Delhi";

console.log(obj1.address.city);
// Delhi (changed!)
```

### Why?

Because nested objects share the same reference.

### Methods for Shallow Copy

```
Object.assign()
Spread operator (...)
Array.slice()
Array.from()
```

Example:

```
constarr= [1,2,3];
constcopy= [...arr];
```

---

# 7. Deep Copy

A **deep copy** creates a completely independent copy including nested objects.

Changes in the copied object **do not affect the original**.

### Example

```
constobj1= {
  name:"Anubhav",
  address: {
    city:"Bhopal"
  }
};

constobj2=JSON.parse(JSON.stringify(obj1));

obj2.address.city="Delhi";

console.log(obj1.address.city);
// Bhopal (not changed)
```

### Methods for Deep Copy

1️⃣ JSON Method

```
JSON.parse(JSON.stringify(obj))
```

2️⃣ structuredClone()

```
constcopy=structuredClone(obj);
```

3️⃣ Libraries

- lodash `cloneDeep`
  Displaying day 34.md.
