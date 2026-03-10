
# 1. Fetch API

## What is Fetch?

`fetch()` is a **built-in JavaScript function used to make HTTP requests** (GET, POST, PUT, DELETE) to a server.

It returns a **Promise**.

```
fetch(url, options)
```

## Basic Syntax

```
fetch("https://api.example.com/users")
.then(res =>res.json())
.then(data =>console.log(data))
.catch(err =>console.log(err))
```

## Important Points

- Fetch returns a **Promise**

• It does **not reject on HTTP errors (404, 500)** automatically

• Response must be converted using:

```
res.json()
res.text()
res.blob()
```

---

# 2. `.then()` / `.catch()` vs `async / await`

Both handle **Promises**.

---

# Using `.then()` and `.catch()`

```
fetch("/api/users")
.then(res =>res.json())
.then(data =>console.log(data))
.catch(err =>console.log(err))
```

### Flow

```
Promise → .then() → .then() → .catch()
```

### Characteristics

- Promise chaining

• Callback style

• Harder to read when nested

Example (callback hell style)

```
fetch(url)
.then(res =>res.json())
.then(data => {
returnfetch(data.nextUrl)
})
.then(res =>res.json())
.then(data =>console.log(data))
```

---

# Using `async / await`

Cleaner and easier to read.

```
asyncfunctiongetUsers(){
try{
constres=awaitfetch("/api/users")
constdata=awaitres.json()
console.log(data)
   }
catch(err){
console.log(err)
   }
}
```

### Characteristics

- Looks **synchronous**

• Easier debugging

• Uses `try/catch`

---

## Key Difference

| Feature | .then/.catch | async/await |
| --- | --- | --- |
| Style | Promise chaining | Synchronous style |
| Readability | Medium | High |
| Error handling | .catch() | try/catch |
| Debugging | Harder | Easier |
| Introduced | ES6 | ES8 |

---

# 3 Error Handling

Errors can be handled using **try / catch**.

```
try{
letdata=JSON.parse("invalid json")
}
catch(err){
console.log("Error:",err.message)
}
```

Optional block

```
try
catch
finally
```

Example

```
try{
console.log("Try block")
}
catch(err){
console.log("Error")
}
finally{
console.log("Always runs")
}
```

---

# 4. ES Modules

ES Modules are the **modern JavaScript module system**.

They allow splitting code into **multiple reusable files**.

---

# Export

Used to send variables or functions from a file.

### Named export

```
exportconstname="Anubhav"

exportfunctiongreet(){
console.log("Hello")
}
```

---

# Import

```
import {name,greet }from"./app.js"
```

---

# Default export

File can have **one default export**.

```
exportdefaultfunctionadd(a,b){
returna+b
}
```

Import:

```
importaddfrom"./app.js"
```

---

# Named vs Default Export

| Feature | Named Export | Default Export |
| --- | --- | --- |
| Number allowed | Multiple | One |
| Import syntax | `{ }` | No braces |
| Renaming | Easy | Allowed |

Example

```
import {greetassayHello }from"./app.js"
```

---

#
Displaying Day 37 notes.md.