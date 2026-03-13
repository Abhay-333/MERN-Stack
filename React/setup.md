
# Vite + React Notes

---

# 1. What is Vite

**Vite** is a **modern frontend build tool** used to create fast web applications.

It is mainly used with frameworks like:

- **React**
- **Vue.js**
- **Svelte**

Vite was created by **Evan You**.

---

# Why Vite is Popular

Older tools like **Webpack** are slow because they **bundle everything before running**.

Vite works differently.

### Vite Approach

```
Browser requests module
        ↓
Vite serves only that module
        ↓
Instant startup
```

### Advantages

1. Extremely fast dev server
2. Instant Hot Module Replacement (HMR)
3. Lightweight
4. Optimized production build

---

# 2. Create React App using Vite

### Step 1 — Create Project

```
npm create vite@latest
```

It will ask some questions.

Example:

```
Project name: my-react-app
Framework: React
Variant: JavaScript
```

---

### Step 2 — Move into Project

```
cd my-react-app
```

---

### Step 3 — Install Dependencies

```
npm install
```

---

### Step 4 — Start Development Server

```
npm run dev
```

Server will run like:

```
http://localhost:5173
```

---

# 3. Vite React Folder Structure

After creating the project you will see:

```
my-react-app
│
├── node_modules
├── public
├── src
│   ├── assets
│   ├── App.jsx
│   ├── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
```

---

# Important Files

### index.html

Entry HTML file.

React app loads inside this.

---

### main.jsx

This is the **main entry point of React**.

Example:

```
importReactfrom"react"
importReactDOMfrom"react-dom/client"
importAppfrom"./App"

ReactDOM.createRoot(document.getElementById("root")).render(
<App/>
)
```

---

### App.jsx

Main component of your application.

Example:

```
functionApp(){
return (
<h1>Hello React</h1>
  )
}

exportdefaultApp
```

---

### vite.config.js

Configuration file for Vite.

Example:

```
import {defineConfig }from'vite'
importreactfrom'@vitejs/plugin-react'

exportdefaultdefineConfig({
  plugins: [react()],
})
```

---

# 4. Important Vite Commands

### Create Project

```
npm create vite@latest
```

### Install Dependencies

```
npm install
```

### Start Development Server

```
npm run dev
```

### Build Production Version

```
npm run build
```

### Preview Production Build

```
npm run preview
```

---

# 5. Basic Concept of React Components

In React, **everything is built using components**.

A **component** is a **reusable piece of UI**.

Example UI:

```
Navbar
Sidebar
Cards
Footer
```

Each of these can be a **component**.

---

# Example Component

```
functionNavbar(){
return<h1>My Website</h1>
}

exportdefaultNavbar
```

Usage:

```
<Navbar/>
```

---

# 6. Types of Components

### 1. Functional Components

Most common type.

Example:

```
functionApp(){
return<h1>Hello</h1>
}
```

---

### 2. Class Components (Older)

Example:

```
classAppextendsReact.Component{
  render(){
return<h1>Hello</h1>
  }
}
```

Now **functional components + hooks** are preferred.

---

# 7. How to Understand Components (Important)

Think of components like **Lego blocks**.

Example website:

```
Page
 │
 ├── Navbar
 ├── Hero Section
 ├── Product Cards
 └── Footer
```

Each block is a **component**.

---

### Component Tree Example

```
App
│
├── Navbar
├── Hero
├── ProductList
│      ├── ProductCard
│      ├── ProductCard
│      └── ProductCard
└── Footer
```

---
Displaying day 39 notes.md.