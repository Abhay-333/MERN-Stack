# React Hooks – Day 49 Notes

## 1. useEffect Hook

### Purpose

Used to handle side effects in React:

- API calls
- DOM updates
- Timers
- Subscriptions

### Basic Syntax

```javascript
useEffect(() => {
  // side effect code

  return () => {
    // cleanup function (optional)
  };
}, [dependencies]);
```

## 2. Dependency Array

### What it does:

Controls when the effect runs

### Cases:

#### No dependency array

```javascript
useEffect(() => {
  console.log("Runs on every render");
});
```

#### Empty dependency array []

```javascript
useEffect(() => {
  console.log("Runs only once (on mount)");
}, []);
```

#### With dependencies

```javascript
useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
```

Runs only when dependency value changes

## 3. Cleanup Function

Why needed:
Prevent memory leaks
Remove listeners / cancel API calls / clear timers
Syntax:

```javascript
useEffect(() => {
  const interval = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}, []);
```

Runs:

- Before component unmount
- Before next effect execution

## 4. API Call using axios in useEffect

### Example:

```javascript
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.example.com/data")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}
```

### Key Points:

- API call should be done inside useEffect
- Use empty dependency array [] → run once on mount
- Store response in state

## 5. useLayoutEffect Hook

### Purpose:

Similar to useEffect, but runs before browser paints (DOM update phase)

### Important Difference

| Hook            | Execution Timing    |
| --------------- | ------------------- |
| useEffect       | Async (after paint) |
| useLayoutEffect | Sync (before paint) |

### Syntax:

useLayoutEffect(() => {
// runs synchronously before painting
}, []);

Basic Syntax

useEffect(() => {
// side effect code

return () => {
// cleanup function (optional)
};
}, [dependencies]);

2. Dependency Array

What it does:

Controls when the effect runs

Cases:

No dependency array

useEffect(() => {
console.log("Runs on every render");
});

Empty dependency array []

useEffect(() => {
console.log("Runs only once (on mount)");
}, []);

With dependencies

useEffect(() => {
console.log("Runs when count changes");
}, [count]);

Runs only when dependency value changes

3. Cleanup Function

Why needed:

Prevent memory leaks

Remove listeners / cancel API calls / clear timers

Syntax:

useEffect(() => {
const interval = setInterval(() => {
console.log("Running...");
}, 1000);

return () => {
clearInterval(interval);
};
}, []);

Runs:

Before component unmount

Before next effect execution

4. API Call using axios in useEffect

Example:

import axios from "axios";
import { useState, useEffect } from "react";

function App() {
const [data, setData] = useState([]);

useEffect(() => {
axios.get("https://api.example.com/data")
.then((res) => {
setData(res.data);
})
.catch((err) => {
console.error(err);
});
}, []);

return <div>{JSON.stringify(data)}</div>;
}

Key Points:

API call should be done inside useEffect

Use empty dependency array [] → run once on mount

Store response in state

5. useLayoutEffect Hook

Purpose:

Similar to useEffect, but runs before browser paints (DOM update phase)

Important Difference

Hook Execution Timing
useEffect Async (after paint)
useLayoutEffect Sync (before paint)

Syntax:

useLayoutEffect(() => {
// runs synchronously before painting
}, []);
Displaying Day 49.md.
