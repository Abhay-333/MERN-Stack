
# JavaScript Timers – Complete Notes

JavaScript provides built-in timer functions to execute code after a delay or repeatedly over time.

These functions are part of the **Web APIs (Browser Environment)**.

---

# 1. setTimeout()

## What is setTimeout?

`setTimeout()` executes a function **once after a specified delay**.

---

## Syntax

```
setTimeout(function,delay);
```

- function → Code to execute
- delay → Time in milliseconds (1000 ms = 1 second)

---

## Example

```
setTimeout(function() {
console.log("Hello after 2 seconds");
},2000);
```

Output after 2 seconds:

```
Hello after 2 seconds
```

---

## Important Points

- Executes only once.
- Does not block code execution.
- Works asynchronously.
- Delay is minimum time, not exact guarantee.

---

# 2. clearTimeout()

## What is clearTimeout?

Used to cancel a timeout before it executes.

---

## Syntax

```
lettimerId=setTimeout(function,delay);

clearTimeout(timerId);
```

---

## Example

```
lettimer=setTimeout(function() {
console.log("Will not run");
},3000);

clearTimeout(timer);
```

 Cancels the scheduled timeout.

---

# 3. setInterval()

## What is setInterval?

`setInterval()` executes a function **repeatedly at fixed time intervals**.

---

## Syntax

```
setInterval(function,intervalTime);
```

---

## Example

```
setInterval(function() {
console.log("Repeating...");
},1000);
```

Output:

```
Repeating...
Repeating...
Repeating...
```

Every 1 second.

---

## Important Points

- Runs continuously.
- Must be stopped manually.
- Can cause performance issues if not cleared.

---

# 4. clearInterval()

## What is clearInterval?

Stops a running interval.

---

## Syntax

```
letintervalId=setInterval(function,delay);

clearInterval(intervalId);
```

---

## Example

```
letcount=0;

letinterval=setInterval(function() {
count++;
console.log(count);

if (count===5) {
clearInterval(interval);
  }
},1000);
```

Stops after 5 iterations.

---

# 5. Real Example – Simple Countdown

```
lettime=5;

letcountdown=setInterval(function() {
console.log(time);
time--;

if (time<0) {
clearInterval(countdown);
console.log("Time's up!");
  }
},1000);
```

---

---
Displaying js Timers Notes.md.


# forEach Loop

## Definition

`forEach()` is an array method that runs a function on every element of the array.

## Syntax

```js
array.forEach(function(value, index, array) {
  // code
});
```

## Example

```js
let arr = [10, 20, 30];

arr.forEach(function(value, index) {
  console.log(value, index);
});
```

Output:

```
10 0
20 1
30 2
```

## Important Points

- It works only on arrays.
- It does not return any value.
- You cannot break the loop (`break` / `continue` cannot be used).

---

# JSON (JavaScript Object Notation)

## Definition

JSON is a format used to store and transfer data. It is commonly used to send data between a server and a client.

## Example

```json
{
  "name": "Rahul",
  "age": 22,
  "city": "Delhi"
}
```

## JSON Rules

- Keys must always be in double quotes `"`.
- String values must be in double quotes.
- Functions are not allowed.
- Comments are not allowed.

## JSON Methods in JavaScript

1. `JSON.stringify()`

   Converts a JavaScript object into a JSON string.

   ```js
   let obj = { name: "Rahul", age: 22 };
   let jsonData = JSON.stringify(obj);
   console.log(jsonData);
   // Output: {"name":"Rahul","age":22}
   ```

2. `JSON.parse()`

   Converts a JSON string into a JavaScript object.

   ```js
   let data = '{"name":"Rahul","age":22}';
   let obj = JSON.parse(data);
   console.log(obj.name); // Rahul
   ```

---

# Template Literals (ES6)

## Definition

Template literals are a modern JavaScript feature (introduced in ES6 / ECMAScript 2015) that allow writing strings using backticks (`` ` ``).

## Syntax

```js
let name = "Rahul";
let message = `Hello ${name}`;
```

### 1. Variable Interpolation

You can include variables or expressions inside `${}`.

```js
let a = 10;
let b = 20;
console.log(`Sum is ${a + b}`);
// Output: Sum is 30
```

### 2. Multi-line Strings

Template literals support multi-line strings without using `\n`.

```js
let text = `Hello
How are you?
I am fine.`;

console.log(text);
```

### 3. Expression Support

You can perform expressions directly inside template literals.

```js
console.log(`5 * 2 = ${5 * 2}`);
// Output: 5 * 2 = 10
```
Displaying day29_en.md.