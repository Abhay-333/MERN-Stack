
# Two-Way Binding in React

**Two-way binding** means:

- The **UI (input field)** updates the **state**
- The **state** updates the **UI**

In simple terms, **data flows in both directions**:

- User types → state changes
- State changes → UI updates automatically

React follows **one-way (unidirectional) data flow**, but

we can **manually implement two-way binding** using:

- `useState`
- `value` attribute
- `onChange` event

This manual approach is called **Controlled Components**.

```jsx
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    setAllUsers([...allUsers, { title, email }])

    setTitle('')
    setEmail('')

  }

  return (
    <div>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}>
        <input
          type="text"
          placeholder='Enter name'
          value={title}
          required
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <input
          type="text"
          placeholder='Enter email'
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />

        <button>Submit</button>
      </form>

      {allUsers.map(function (elem, idx) {
        return <div key={idx}>
          <h4>{elem.title}</h4>
          <p>{elem.email}</p>
        </div>
      })}
    </div>

  )
}

export default App
```

Below is a **clear, step-by-step explanation** of the example

---

## 1. Importing `useState`

```jsx
import { useState } from 'react'
```

- `useState` is a React Hook
- It allows this component to **store and update data**
- Whenever state changes, the component **re-renders**

---

## 2. Component Definition

```jsx
const App = () => {

```

- `App` is a **functional component**
- Everything inside it runs again when state changes

---

## 3. State Variables (Core of Two-Way Binding)

```jsx
const [title, setTitle] = useState('')
const [email, setEmail] = useState('')
```

- `title` → stores **name input value**
- `email` → stores **email input value**
- Initial value is empty string (`''`)
- These states are **bound to input fields**

This is where **two-way binding starts**.

---

### Users List State

```jsx
const [allUsers, setAllUsers] = useState([])
```

- Stores **all submitted users**
- Initial value is an empty array
- Each user will be an object: `{ title, email }`

---

## 4. Form Submit Handler

```jsx
const submitHandler = (e) => {
  e.preventDefault()
```

- `e.preventDefault()` stops page refresh
- React handles the form submission internally

---

### Adding User Data

```jsx
setAllUsers([...allUsers, { title, email }])
```

- Creates a **new array**
- Copies old users using spread operator `...allUsers`
- Adds a new user object
- State update triggers **re-render**

React rule: **never mutate state directly**

---

### Clearing Inputs After Submit

```jsx
setTitle('')
setEmail('')
```

- Resets input fields
- Because inputs are controlled, UI also clears
- This shows **state → UI binding**

---

## 5. Form JSX

```jsx
<form onSubmit={(e) => {
  submitHandler(e)
}}>
```

- When form is submitted, `submitHandler` runs
- Submit works via button or Enter key

---

## 6. First Input (Name)

```jsx
<input
  type="text"
  placeholder='Enter name'
  value={title}
  required
  onChange={(e) => {
    setTitle(e.target.value)
  }}
/>
```

### What is happening here?

- `value={title}`
    
    Input value comes from state (**state → UI**)
    
- `onChange`
    
    Every keystroke updates state (**UI → state**)
    

This is **two-way binding using controlled components**.

---

## 7. Second Input (Email)

```jsx
<input
  type="text"
  placeholder='Enter email'
  value={email}
  required
  onChange={(e) => {
    setEmail(e.target.value)
  }}
/>
```

- Works exactly like the first input
- Separate state for clean control
- Keeps email input synchronized with state

---

## 8. Submit Button

```jsx
<button>Submit</button>
```

- Triggers form submission
- Calls `onSubmit` of the form

---

## 9. Rendering Submitted Users

```jsx
{allUsers.map(function (elem, idx) {
  return <div key={idx}>
    <h4>{elem.title}</h4>
    <p>{elem.email}</p>
  </div>
})}
```

### Explanation:

- `map()` loops over `allUsers`
- `elem` = single user object
- `idx` = index (used as key here)
- Displays each user's:
    - name (`elem.title`)
    - email (`elem.email`)

Every time `allUsers` updates → UI updates automatically.
Displaying Day 74 Notes.md.


# Local Storage (Web Storage API)

**Local Storage** is a browser-based storage mechanism that allows web applications to store data **permanently** in the user's browser.

- Data is stored as **key-value pairs**
- Data **does not expire automatically**
- Data remains even after:
  - Browser refresh
  - Browser close
  - System restart

Local Storage is part of the **Web Storage API**.

| Feature       | Description          |
|---------------|----------------------|
| Storage Type  | Key-Value pairs      |
| Data Type     | **Only strings**     |
| Capacity      | ~5-10 MB             |
| Scope         | Per domain           |
| Expiry        | Never (until manually cleared) |

## Basic Local Storage Methods

### 1. `setItem()` → Store data

```javascript
localStorage.setItem("name", "Anubhav");
```

- `"name"` → key
- `"Anubhav"` → value (string)

---

### 2. `getItem()` → Retrieve data

```javascript
const name = localStorage.getItem("name");
console.log(name);
```

Returns the value of the key or `null` if not found.

---

### 3. `removeItem()` → Remove a specific key

```javascript
localStorage.removeItem("name");
```

---

### 4. `clear()` → Remove all data

```javascript
localStorage.clear();
```

---

## Storing Objects in Local Storage

### Problem:

Local Storage **cannot store objects directly**.

If you try:

```javascript
localStorage.setItem("user", {name: "Anubhav", age: 24});
```

This will store:

```
[object Object]
```

### Solution: `JSON.stringify()`

### Step 1: Convert object to string

```javascript
const user = {
  name: "Anubhav",
  age: 24,
  role: "Developer"
};

localStorage.setItem("user", JSON.stringify(user));
```

---

### Getting Object Back from Local Storage

### Step 2: Convert string back to object

```javascript
const storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);
```

- `JSON.parse()` converts JSON string → JavaScript object

---

## Storing Arrays in Local Storage

### Example Array

```javascript
const skills = ["HTML", "CSS", "JavaScript", "React"];
```

### Store Array

```javascript
localStorage.setItem("skills", JSON.stringify(skills));
```

---

### Retrieve Array

```javascript
const storedSkills = JSON.parse(localStorage.getItem("skills"));
console.log(storedSkills[2]); // JavaScript
```

---

## Summary: Object & Array Storage Flow

```
JS Object/Array
      ↓
JSON.stringify()
      ↓
Local Storage (String)
      ↓
JSON.parse()
      ↓
JS Object/Array
```

## Comparison: Local Storage vs Session Storage vs Cookies

- **Local Storage:** A browser storage that permanently saves key-value data on the client side, used to store user preferences and cached data.
- **Session Storage:** A browser storage that saves data only for the active tab session, used for temporary data like form states or step-wise workflows.
- **Cookies:** Small pieces of data stored in the browser and sent with every server request, used mainly for authentication, tracking, and server-side state management.

| Feature          | Local Storage          | Session Storage        | Cookies                  |
|------------------|------------------------|------------------------|--------------------------|
| Data Lifetime    | Permanent until manually cleared | Exists until browser tab is closed | Expires based on set time |
| Storage Capacity | ~5-10 MB               | ~5 MB                  | ~4 KB                    |
| Data Scope       | Per domain             | Per tab (same origin)  | Sent with every HTTP request |
| Data Type        | Strings only           | Strings only           | Strings only             |
| Server Access    | Not sent to server     | Not sent to server     | Automatically sent to server |
| Performance Impact | Fast (client-side only) | Fast (client-side only) | Slower due to request overhead |
| Typical Use Case | Theme, preferences, cached data | Temporary form/session data | Authentication, tracking |


**One-line summary:**

- **Local Storage:** Best for long-term client-side data.
- **Session Storage:** Best for short-lived, tab-specific data.
- **Cookies:** Best when data must be shared with the server.

## React Fragments

A **Fragment** allows you to group multiple JSX elements **without adding extra nodes to the DOM**.

In React, a component must return **a single parent element**.

Fragments solve this limitation cleanly.

### Syntax (`<> </>`)

```javascript
return (
  <>
    <h1>Hello</h1>
    <p>Welcome</p>
  </>
);
```

This is the **most commonly used** approach.

## Advantages of Fragments

- No extra DOM elements
- Cleaner HTML structure
- Better performance
- Helps with table layouts (`<tr>`, `<td>`)
- Improves semantic correctness

---

## When to Use Fragments?

Use fragments when:

- You need multiple elements returned
- You want clean DOM
- You are rendering lists
- You want semantic HTML without wrapper divs
Displaying Day 76 Notes.md.


1. CSR – Client Side Rendering

**Client Side Rendering (CSR)** is a rendering approach where the **browser (client)** is responsible for rendering the UI.

The server sends a **minimal HTML file** along with JavaScript.

After the JavaScript loads, React builds the UI inside the browser.

### How CSR Works (Step-by-Step)

1. User requests a page.
2. Server returns:
    - An almost empty `index.html`
    - JavaScript bundle (React code)
3. Browser downloads JavaScript.
4. React executes in the browser.
5. API calls are made from the browser.
6. UI is rendered dynamically.

### Advantages of CSR

- Excellent for **highly interactive apps**
- Smooth client-side navigation
- Lower server load
- Ideal for dashboards, admin panels, SPAs

### Disadvantages of CSR

- Poor SEO by default
- Slower first paint
- Requires JavaScript to be enabled
- Blank screen until JS loads

### Example Use Cases

- Admin dashboards
- Social media apps
- Web applications requiring heavy interactivity

---

## 2. SSR – Server Side Rendering

**Server Side Rendering (SSR)** means the **server generates the complete HTML** for each request and sends it to the browser.

The browser immediately displays content without waiting for JavaScript execution.

### How SSR Works (Step-by-Step)

1. User requests a page.
2. Server:
    - Fetches required data
    - Renders React components on the server
3. Server sends **fully rendered HTML**
4. Browser displays content instantly
5. JavaScript hydrates the page for interactivity

### Advantages of SSR

- Excellent SEO
- Faster first contentful paint
- Better performance on slow devices
- Suitable for content-heavy websites

### Disadvantages of SSR

- Higher server load
- More complex architecture
- Slightly slower page transitions
- Requires Node.js support

### Example Use Cases

- Blogs
- E-commerce websites
- Marketing websites
- News platforms

3. CSR vs SSR (Quick Comparison)

| Feature            | CSR      | SSR              |
| ------------------ | -------- | ---------------- |
| Rendering Location | Browser  | Server           |
| Initial Load       | Slower   | Faster           |
| SEO                | Poor     | Excellent        |
| Server Load        | Low      | High             |
| Interactivity      | High     | Moderate         |
| Best For           | Web apps | Content websites |


4. Axios – HTTP Client Library

**Axios** is a **promise-based HTTP client** used to make API requests from:

- Browser
- Node.js

It simplifies API communication compared to native `fetch`.

### Why We Use Axios

- Automatic JSON parsing
- Cleaner syntax
- Built-in error handling
- Supports request/response interceptors
- Supports cancellation and timeouts

### Axios vs Fetch

- Fetch requires manual JSON conversion
- Axios returns parsed data directly
- Axios throws errors for HTTP status codes
- Fetch requires extra configuration for errors

---

## 5. Axios with React

### Where Axios is Used in React

- Inside lifecycle logic
- Inside hooks (`useEffect`)
- On user actions (button click, form submit)

---

## 6. Axios GET Request in React

```jsx
import axiosfrom"axios";
import { useEffect, useState }from"react";

constApp = () => {
const [users, setUsers] =useState([]);

useEffect(() => {
    axios.get("https://api.example.com/users")
      .then((response) => {
setUsers(response.data);
      })
      .catch((error) => {
console.error(error);
      });
  }, []);

return (
<div>
      {users.map((user) => (
<pkey={user.id}>{user.name}</p>
      ))}
</div>
  );
};

exportdefaultApp;

```

### Explanation

- `axios.get()` sends GET request
- `response.data` contains server data
- `useEffect` prevents infinite calls
- `useState` triggers re-render

## 7. Axios Error Handling

```jsx
axios.get("/api/data")
  .then(res =>console.log(res.data))
  .catch(err => {
if (err.response) {
console.log("Server Error:", err.response.status);
    }else {
console.log("Network Error");
    }
  });

```

### Types of Errors

- Network errors
- Server errors (4xx, 5xx)
- Timeout errors
Displaying Day 77 Notes.md.