
# Introduction to React

React is a JavaScript library used to build fast, interactive, and scalable user interfaces, especially Single Page Applications (SPAs). React applications update the UI without reloading the page.

**In simple words:**  
React helps us build modern websites where content changes dynamically without refreshing the browser.

## History of React

React was created by Jordan Walke, a software engineer at Facebook (Meta). It was first released in 2013. Today, React is maintained by Meta and a large open-source community.

Displaying Day 67 notes.md.


# Steps to Create a Vite Project

## 1. Install Node.js

Install Node.js (LTS) on your system from the official Node.js website.  
(Windows / macOS – same process)

## 2. Run the Command (Create Vite Project)

```bash
npm create vite
```

## 3. Project Name

Project name: › my-project

Creates a folder with this name.

## 4. Select Framework

Options:

- Vanilla
- React
- Vue
- Svelte
- Solid
- Preact

Example:

Select a framework: › React

## 5. Select Variant (Language)

Options:

- JavaScript
- TypeScript
- JavaScript + SWC
- TypeScript + SWC

Recommended:

JavaScript + SWC

## 6. Move Into Project Folder

```bash
cd my-project
```

## 7. Install Dependencies

```bash
npm install
```

## 8. Start Development Server

```bash
npm run dev
```

## 9. Local Development URL

http://localhost:5173/
Displaying Day 68 Notes.md.

Task: https://in.pinterest.com/pin/183943966026154260/


# Real DOM vs Virtual DOM

## Real DOM

The Real DOM is the actual browser Document Object Model.
Every UI element is a real node in memory.

### Characteristics

- Directly represents the UI on the browser
- Updating any element causes reflow and repaint
- Slower for frequent UI updates
- Manipulated using JavaScript (document.createElement, appendChild, etc.)

#### Example (Real DOM update)

```javascript
const div = document.getElementById("box");
div.innerText = "Hello";
```

Every update directly touches the browser DOM.

## Virtual DOM

The Virtual DOM is a lightweight JavaScript object representation of the Real DOM, maintained by React.

### Characteristics

- Exists in memory (not in the browser)
- Changes are first applied to Virtual DOM
- React compares old and new Virtual DOM (diffing)
- Only the minimum required changes are applied to the Real DOM
- Faster and more efficient

### How React Uses Virtual DOM

- State/props change
- New Virtual DOM is created
- React compares it with previous Virtual DOM
- React updates only the changed nodes in Real DOM

### Why Virtual DOM is Important

- Better performance
- Smooth UI updates
- Predictable UI behavior

| Feature          | Real DOM   | Virtual DOM |
| ---------------- | ---------- | ----------- |
| Update Speed     | Slow       | Fast        |
| DOM Manipulation | Direct     | Batched     |
| Memory Usage     | Higher     | Lower       |
| Used By          | Vanilla JS | React       |

# JSX (JavaScript XML) and Its Importance

## JSX

JSX is a syntax extension of JavaScript that allows writing HTML-like code inside JavaScript.

JSX is not HTML.
It is converted into JavaScript by Babel.

### JSX Example

```javascript
const element = <h1>Hello React</h1>;
```

## Component Naming Rules

- Component names must start with a Capital Letter
- Lowercase names are treated as HTML elements

### Correct

```javascript
function Header() {
  return <h1>Header</h1>;
}
```

A component is a reusable, independent UI block.

### Basic Functional Component

```javascript
function Button() {
  return <button>Click Me</button>;
}
```

## Keep Components Small

- Easier to read
- Easier to debug
- Easier to reuse

Displaying Day 69 Notes.md.


# Styling in React

## 1. Different Styling Approaches in React

React supports multiple ways to style UI components. The most commonly used approaches are:

- Inline Styles
- CSS Stylesheets
- CSS Modules
- Utility-First CSS (Tailwind CSS)
- Styled Components / CSS-in-JS (advanced, optional)

Each approach has different use cases depending on scalability, maintainability, and team workflow.

## 2. Importance of Component-Based Styling

React follows a component-based architecture, so styling should align with this philosophy.

Why component-based styling is important:

- Styles remain scoped to a component
- Avoids global CSS conflicts
- Improves code readability
- Makes components reusable
- Easier to maintain in large applications

Component-based styling ensures that UI logic and styles evolve together.

## CSS Modules

### What are CSS Modules?

CSS files where class names are locally scoped to the component.

File naming convention:

- `ComponentName.module.css`

### Example CSS (Button.module.css)

```css
.btn {
  background-color: blue;
  color: white;
  padding: 10px 20px;
}
```

### Example React Component

```jsx
import styles from "./Button.module.css";

function Button() {
  return <button className={styles.btn}>Click Me</button>;
}
```

### Benefits:

- No class name collision
- Clean and maintainable
- Works well with large projects

## 5. Tailwind CSS with React (Vite)

### What is Tailwind CSS?

A utility-first CSS framework that provides small, reusable classes for styling.

### Setup (One-Line Instruction as Requested):

Go to the Tailwind CSS website, click Get Started, then go to the Using Vite section and follow the steps provided to set up Tailwind CSS with React.

## 6. Basic Tailwind CSS Utilities

### Height & Width

```html
<div class="h-24 w-24 bg-orange-500"></div>
```

### Flexbox

```html
<div class="flex"></div>
```

### Center Items (Both Axis)

```html
<div class="flex items-center justify-center"></div>
```

### Space Between Items

```html
<div class="flex justify-between"></div>
```

### Background Color

```html
<div class="bg-blue-500"></div>
```

### Background Opacity

```html
<div class="bg-black bg-opacity-50"></div>
```

## 7. Custom CSS Values in Tailwind ([] syntax)

Tailwind allows custom values using square brackets.

### Examples:

```html
<div class="h-[120px] w-[300px]"></div>

<div class="bg-[#1e293b]"></div>

<div class="text-[18px]"></div>
```

### Why it's useful:

- No need to write custom CSS files
- Keeps everything inside JSX
- Fast UI experimentation

## 8. Why Tailwind Works Well with React

- Perfect for component-based styling
- No context switching between CSS and JSX
- Faster development
- Consistent design system
- Eliminates unused CSS

## Summary

- Inline Styles → Quick, dynamic, but limited
- CSS Modules → Scoped, maintainable, production-ready
- Tailwind CSS → Utility-first, fast, scalable, modern

Component-based styling is essential for clean React architecture
Displaying Day 70 Notes.md.


# React Props: Passing Data to Components

Props are read-only inputs passed from parent to child.

```javascript
function Card(props) {
  return <h2>{props.title}</h2>;
}

<Card title="React Notes" />
```

Props are:

- Immutable
- Passed top-down
- Used for configuration

## Rendering Array Data using map

```javascript
const users = ["A", "B", "C"];

users.map(user => <li key={user}>{user}</li>);
```

## Eliminating Array Data using filter

```javascript
const filteredUsers = users.filter(user => user !== "B");

filteredUsers.map(user => <li key={user}>{user}</li>);
```

### Concept

- `filter()` removes data
- `map()` transforms data
- Both are immutable operations

## Reusing Components, Lists & Keys

### Reusing Components

```jsx
<Card title="HTML" />
<Card title="CSS" />
<Card title="React" />
```

### Lists & Keys

```jsx
items.map(item => (
  <Card key={item.id} title={item.name} />
));
```

### Why Keys Matter

- Helps React track changes efficiently
- Prevents unnecessary re-renders
- Keys must be unique & stable

## Passing Inline Styles as Props (Most Common)

### Parent Component

```javascript
function App() {
  const boxStyle = {
    width: "150px",
    height: "150px",
    backgroundColor: "orange",
    borderRadius: "8px"
  };

  return <Box style={boxStyle} />;
}
```

### Child Component

```javascript
function Box({ style }) {
  return <div style={style}></div>;
}
```

### Key Points

- Style object must be camelCased
- Passed as a normal prop
- Applied using `style={propName}`

## 3. Passing Partial Styles & Merging in Child

### Parent

```jsx
function App() {
  return (
    <Card
      bgColor="black"
      textColor="white"
    />
  );
}
```

### Child

```javascript
function Card({ bgColor, textColor }) {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        padding: "20px"
      }}
    >
      Styled via Props
    </div>
  );
}
```
Displaying Day 71 notes.md.


## Conditional Rendering in React ##

**Conditional Rendering** means **showing different UI based on a condition** (state, props, user action, API response, etc.).

In simple words:

*React decides what to render depending on a condition.*

React uses **JavaScript conditions**, not special syntax.

Example:-

## Step 1: Users Data (Array of Objects)

```jsx
const users = [
  {
name:"Rahul",
email:"rahul@gmail.com",
gender:"male",
color:"blue"
  },
  {
name:"Amit",
email:"amit@gmail.com",
gender:"male",
color:"green"
  },
  {
name:"Priya",
email:"priya@gmail.com",
gender:"female",
color:"pink"
  },
  {
name:"Neha",
email:"neha@gmail.com",
gender:"female",
color:"purple"
  }
];

```

---

## Step 2: Mens Changing Room Component

```jsx
functionMensChangingRoom() {
return<h2>Mens Changing Room</h2>;
}

```

---

## Step 3: Womens Changing Room Component

```jsx
functionWomensChangingRoom() {
return<h2>Womens Changing Room</h2>;
}

```

---

## Step 4: Conditional Rendering Using Ternary Operator

```jsx
functionApp() {
return (
<div>
      {
        users[0].gender === "male"
          ?<MensChangingRoom />
          :<WomensChangingRoom />
      }
</div>
  );
}

exportdefaultApp;

```

# Events in React (JSX Events)

In **React**, events are **props** that you pass to JSX elements.

You are basically saying:

> “Jab ye event ho, to ye function chala do.”
> 

React uses **Synthetic Events**, which work the same across all browsers.

## Basic Rule in React Events

- Event names are written in **camelCase**
- You pass a **function reference**, not function call

### Wrong way

```jsx
<button onClick={handleClick()}>

```

### Correct way

```jsx
<button onClick={handleClick}>

```

---

## 1. `onClick` Event

### Example:

```jsx
functionApp() {
functionhandleClick() {
console.log("clicked");
  }

return<buttononClick={handleClick}>Click Me</button>;
}

```

---

## 2. `onSubmit` Event (Form)

### Example:

```jsx
functionApp() {
functionhandleSubmit(e) {
    e.preventDefault();
console.log("submitted");
  }

return (
<formonSubmit={handleSubmit}>
<buttontype="submit">Submit</button>
</form>
  );
}

```

---

## 3. `onChange` Event

### Example:

```jsx
functionApp() {
functionhandleChange() {
console.log("value changed");
  }

return<inputonChange={handleChange} />;
}

```

---

## 4. `onInput` Event

```jsx
<input onInput={() =>console.log("typing")} />

```

- Har key press par trigger hota hai

---

## 5. `onMouseEnter`

```jsx
<div onMouseEnter={() =>console.log("mouse entered")}>
HoverMe
</div>

```

---

## 6. `onMouseLeave`

```jsx
<div onMouseLeave={() =>console.log("mouse left")}>
LeaveMe
</div>

```

---

## 7. `onFocus`

```jsx
<input onFocus={() =>console.log("focused")} />

```

---

## 8. `onBlur`

```jsx
<input onBlur={() =>console.log("blurred")} />

```

---

## 9. `onKeyDown`

```jsx
<input onKeyDown={() =>console.log("key pressed")} />

```

---

## 10. `onDoubleClick`

```jsx
<button onDoubleClick={() =>console.log("double clicked")}>
DoubleClick
</button>

```

---

## 11. `onScroll`

```jsx
<div
  style={{height:"100px",overflow:"scroll" }}
  onScroll={() =>console.log("scrolling")}
>
ScrollContent
</div>

```

---

## 12. Passing Arrow Function Directly

```jsx
<button onClick={() =>console.log("clicked")}>
Click
</button>

```
Displaying Day 72 Notes.md.


`useState` in React

`useState` is a **React Hook** that allows **functional components** to store and manage **state**.

In simple terms:

> useState lets a component remember values and update the UI when those values change.
> 

Examples of data that need state:

- Counter values
- Form inputs
- Toggle (show/hide)
- Logged-in user status
- Theme (dark/light)
- API response data

If data **never changes**, state is **not required**.

## Syntax of `useState`

```jsx
const [state, setState] =useState(initialValue);

```

### Breakdown:

- `state` → current value
- `setState` → function to update the value
- `initialValue` → value used on the **first render**

Example:

```jsx
const [count, setCount] =useState(0);

```

Here:

- `count` starts with `0`
- `setCount` is used to update `count`

## Basic Example – Counter

```jsx
import { useState }from"react";

functionCounter() {
const [count, setCount] =useState(0);

return (
<div>
<h2>Count: {count}</h2>
<buttononClick={() => setCount(count + 1)}>
        Increment
</button>
</div>
  );
}

exportdefaultCounter;

```

### Explanation:

- Initial render → `count = 0`
- Button click → `setCount(count + 1)`
- State updates
- Component re-renders
- New value is shown in UI
Displaying Day 73 Notes.md.