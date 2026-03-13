
# 1. History of React

**React** is a **JavaScript library for building user interfaces (UI)**, mainly for **single-page applications (SPA)**.

### Timeline

**2011 – Creation**

- Created by **Jordan Walke** at **Facebook**.
- First used internally in Facebook's **News Feed**.

**2012**

- Used in **Instagram**.

**2013 – Open Source**

- Facebook released React as **open-source** at **JSConf US 2013**.

**2015**

- React Native released for mobile development.

**2019+**

- React introduced **Hooks** (`useState`, `useEffect` etc).

### Why React Became Popular

1. Component-based architecture
2. Virtual DOM for performance
3. Reusable UI components
4. Strong ecosystem

---

# 2. React Using CDN (Without Build Tools)

You can run React **directly in the browser** using CDN links.

### Basic HTML Setup

```
<!DOCTYPE html>
<html>
<head>
<title>React CDN Example</title>
</head>
<body>

<divid="root"></div>

<!-- React Library -->
<scriptsrc="https://unpkg.com/react@18/umd/react.development.js"></script>

<!-- React DOM -->
<scriptsrc="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

<!-- Babel -->
<scriptsrc="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<scripttype="text/babel">

functionApp(){
return<h1>Hello React</h1>;
}

constroot=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

</script>

</body>
</html>
```

### Important Points

React CDN setup includes:

1. React Library
2. React DOM
3. Babel (for JSX compilation)

This method is used for:

- Learning React
- Small demos
- Prototyping

Not recommended for production apps.

---

# 3. Virtual DOM Concept

### Normal DOM

When we update UI in JavaScript:

```
User Action → JS changes DOM → Browser re-renders page
```

DOM updates are **slow and expensive**.

---

### Virtual DOM

React uses a **Virtual DOM**, which is a **lightweight copy of the real DOM stored in memory**.

Process:

```
State change
     ↓
New Virtual DOM created
     ↓
Compare with old Virtual DOM
     ↓
Find differences
     ↓
Update only changed elements
```

### Advantages

1. Faster UI updates
2. Less direct DOM manipulation
3. Better performance

---

# 4. React Library vs React DOM

React is split into **two main packages**.

### React (Core Library)

Package:

```
react
```

Responsibilities:

- Create components
- Manage state
- Create virtual DOM
- Hooks

Example:

```
importReactfrom"react"
```

---

### ReactDOM

Package:

```
react-dom
```

Responsibilities:

- Connect React with **browser DOM**
- Render components into HTML

Example:

```
importReactDOMfrom"react-dom"
```

Example usage:

```
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
```

---

# 5. React.createElement()

Before JSX, React used **React.createElement()**.

### Syntax

```
React.createElement(type,props,children)
```

### Example

```
constelement=React.createElement(
"h1",
null,
"Hello React"
);
```

Render:

```
ReactDOM.render(element,document.getElementById("root"));
```

---

### JSX Behind the Scenes

JSX:

```
<h1>Hello</h1>
```

Converted by Babel into:

```
React.createElement("h1",null,"Hello")
```

So JSX is **syntactic sugar** for `React.createElement()`.

---

# 6. Babel

**Babel** is a **JavaScript compiler**.

It converts **modern JavaScript + JSX** into **browser compatible JavaScript**.

Example:

JSX code:

```
constelement=<h1>Hello</h1>;
```

Babel converts to:

```
constelement=React.createElement("h1",null,"Hello");
```

### Why Babel is needed

Browsers **cannot understand JSX**.

So Babel:

```
JSX → JavaScript
ES6+ → ES5
```

---

# 7. Reconciliation

**Reconciliation** is the process React uses to **update the DOM efficiently when state changes**.

Process:

```
State changes
      ↓
New Virtual DOM created
      ↓
Compare with previous Virtual DOM
      ↓
Find differences
      ↓
Update only necessary parts of real DOM
```

Example:

Old UI:

```
<h1>Hello</h1>
```

New UI:

```
<h1>Hello Anubhav</h1>
```

React will update **only text**, not the entire element.

---

# 8. Diffing Algorithm

The **Diffing Algorithm** is the method React uses to compare **two Virtual DOM trees**.

React uses an **O(n) algorithm instead of O(n³)** for performance.

### React Assumptions

React makes two assumptions:

**1️⃣ Different element types → different trees**

Example:

```
<div>
```

changes to

```
<span>
```

React destroys old tree and builds new one.

---

**2️⃣ Keys help identify list items**

Example:

```
{items.map(item => (
<likey={item.id}>{item.name}</li>
))}
```

Keys help React identify:

- added elements
- removed elements
- updated elements
Displaying Day 38.md.