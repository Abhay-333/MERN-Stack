
# React + Vite + Tailwind + useState **(Class Notes)**

## 1. Tailwind CSS Installation in Vite

Recently **Vite Version 8** was released, and currently **Tailwind CSS has compatibility issues with it**. Because of this, installing Tailwind with the **latest Vite version may cause errors**.

### Solution Used in Class

Instead of using the latest Vite version, we create the project using **Vite 7 or an older version**.

Example command:

```
npm create vite@7
```

or

```
npm create vite
```

### Important Note

To install Tailwind CSS in the project:

> Follow the official documentation from the **Tailwind CSS website for Vite installation**.
> 

Official documentation:

https://tailwindcss.com/docs/installation/using-vite

---

# 2. useState Hook (React)

`useState` is a **React Hook used to manage state in functional components.**

### Syntax

```
const [state,setState]=useState(initialValue);
```

### Two Parts of useState

1. **State**
    - Stores the current value.
2. **setState Function**
    - Used to update the state value.

Example:

```
const [count,setCount]=useState(0);
```

Here:

- `count` → current state value
- `setCount` → function used to update the value

---

# 3. React Re-rendering Rule

React **re-renders the component only when the state value changes**.

If the **new value is strictly equal (`===`) to the previous value**, React **does not re-render**.

Example:

```
setCount(5);
setCount(5);
```

If the previous value was already **5**, React will **skip the re-render**.

Reason:

```
5 === 5  → true
```

So React assumes **no change occurred**.

---

# 4. Batching in useState

React performs **batching** when multiple state updates occur in the same function.

### What is Batching?

If multiple `setState` calls are executed inside one function, React:

1. Groups them together
2. Performs **only one re-render**

Example:

```
functionhandleClick() {
setCount(1);
setCount(2);
setCount(3);
}
```

React will:

- Process all updates
- Apply the **last value**
- Re-render **only once**

Final state:

```
count = 3
```

This improves **performance** by avoiding unnecessary renders.

---

# 5. Object State in useState

Objects in JavaScript are **reference types**.

Example:

```
const [user,setUser]=useState({
  name:"Anubhav",
  age:24
});
```

---

# 6. Problem: Updating Object Property Directly

If we modify the object directly, React may **not detect the change**.

Example:

```
user.age=25;
setUser(user);
```

Reason:

The **object reference remains the same**.

```
oldObject === newObject → true
```

React thinks **no change happened**, so **no re-render occurs**.

---

# 7. Correct Way to Update Object State

Always create a **new object reference** when updating object state.

Use the **spread operator (`...`)**.

Example:

```
setUser({
  ...user,
  age:25
});
```

Explanation:

- `...user` copies the previous object
- `age: 25` updates the property

Now the reference changes:

```
oldObject !== newObject
```

So React **triggers a re-render**.

---

# 8. Example Component

```
import {useState }from"react";

functionApp() {

const [user,setUser]=useState({
    name:"Anubhav",
    age:24
  });

functionchangeAge() {
setUser({
      ...user,
      age:user.age+1
    });
  }

return (
<div>
<h1>{user.name}</h1>
<h2>{user.age}</h2>

<buttononClick={changeAge}>
        Increase Age
</button>
</div>
  );
}

exportdefaultApp;
```
Displaying Day 41 notes.md.