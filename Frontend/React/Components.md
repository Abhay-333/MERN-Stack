
# Components in React

## Definition

A **Component** in React is a **reusable, independent piece of UI**. It allows developers to divide the UI into smaller parts that can be reused and maintained easily.

React applications are built using **multiple components that combine to form a complete UI**.

Example:

- Navbar
- Sidebar
- Footer
- Product Card
- Button

Each of these can be a **separate component**.

---

## Types of Components

### 1. Functional Components

A **JavaScript function** that returns JSX.

Example:

```
functionGreeting() {
return<h1>Hello User</h1>;
}
```

Arrow Function version:

```
constGreeting= () => {
return<h1>Hello User</h1>;
};
```

Characteristics:

- Simple
- Lightweight
- Mostly used in modern React
- Can use **Hooks (useState, useEffect)**

---

### 2. Class Components

Older way of creating components using ES6 classes.

Example:

```
importReact, {Component }from"react";

classGreetingextendsComponent {
  render() {
return<h1>Hello User</h1>;
  }
}
```

Characteristics:

- Uses lifecycle methods
- More complex
- Mostly replaced by functional components with hooks

---

## Key Features of Components

1. **Reusability**
2. **Separation of Concerns**
3. **Maintainability**
4. **Better Code Organization**

---

## Example Structure

```
App
 ├── Navbar
 ├── HeroSection
 ├── ProductList
 │     └── ProductCard
 └── Footer
```

Each part is a **separate component**.

---

# 2. Props

## Definition

**Props** are used to **pass data from a parent component to a child component**.

They make components **dynamic and reusable**.

Props are **read-only**.

---

## Example

Parent Component:

```
functionApp() {
return<Username="Anubhav"age={24}/>;
}
```

Child Component:

```
functionUser(props) {
return (
<h1>
      {props.name} is {props.age} years old
</h1>
  );
}
```

Output:

```
Anubhav is 24 years old
```

---

## Destructuring Props

Better way to use props.

```
functionUser({ name, age }) {
return (
<h1>
      {name} is {age} years old
</h1>
  );
}
```

---

## Props Characteristics

- Immutable (cannot be modified)
- Passed from parent to child
- Used to make components reusable
- Supports any data type

Examples of props:

```
String
Number
Boolean
Array
Object
Function
```

Example:

```
<Buttoncolor="red"size="large"/>
```

---

# 3. Props Drilling

## Definition

**Props Drilling** is the process of passing props **through multiple intermediate components** to reach a deeply nested child component.

This happens when the **data is needed by a deeply nested component** but must pass through components that **do not use it**.

---

## Example

Component Structure:

```
App
 └── Parent
      └── Child
           └── GrandChild
```

App Component:

```
functionApp() {
constname="Anubhav";
return<Parentname={name}/>;
}
```

Parent Component:

```
functionParent({ name }) {
return<Childname={name}/>;
}
```

Child Component:

```
functionChild({ name }) {
return<GrandChildname={name}/>;
}
```

GrandChild Component:

```
functionGrandChild({ name }) {
return<h1>{name}</h1>;
}
```

Here the `name` prop is passed through **multiple layers**.

---

## Problems with Props Drilling

1. Code becomes messy
2. Difficult to maintain
3. Hard to track data flow
4. Unnecessary prop passing

---

---

# 4. Static CSS File Integration in React

## Definition

Static CSS integration means **linking a normal CSS file with React components** to style them.

React allows **importing CSS files directly into components**.

---

## Steps to Use CSS File

### Step 1: Create CSS File

Example:

```
style.css
```

```
.heading {
  color:red;
  font-size:30px;
}
```

---

### Step 2: Import CSS File

```
import"./style.css";
```

---

### Step 3: Use Class in JSX

```
functionApp() {
return<h1className="heading">Hello React</h1>;
}
```

Note:

React uses **className instead of class** because `class` is a reserved JavaScript keyword.

---

## Folder Structure Example

```
src
 ├── components
 │      ├── Navbar.jsx
 │      └── Footer.jsx
 ├── styles
 │      └── style.css
 └── App.jsx
```

---

## Ways to Style React

1. **Static CSS file**
2. **Inline Styling**
3. **CSS Modules**
4. **Styled Components**
5. **Tailwind CSS**

Example Inline Styling:

```
<h1style={{ color:"blue", fontSize:"30px" }}>
  Hello React
</h1>
```
Displaying Day 40 notes.md.