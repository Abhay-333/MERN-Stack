# Memoization – Complete Notes

What is Memoization?

**Memoization** is an **optimization technique** used to improve performance by **caching (storing) the results of expensive function calls** and returning the cached result when the same inputs occur again.Instead of recalculating → reuse stored result.Why do we use Memoization?

---

- Avoid **repeated calculations**
- Improve **performance (especially in heavy computations)**
- Reduce **time complexity**
- Useful in:
  - Recursion (e.g., Fibonacci)
  - React rendering optimization
  - API/data-heavy operations Basic Concept

---

Store results in a cache (object / map)

```
input → check cache
       → if exists → return cached result
       → else → compute + store + return
```

---

## Example (Without Memoization)

```
function slowSquare(n) {
console.log("Calculating...");
return n*n;
}

slowSquare(5);// Calculates
slowSquare(5);// Calculates again  (waste)
```

---

## Example (With Memoization)

```
function memoizedSquare() {
let cache= {};

returnfunction(n) {
if (cache[n]) {
console.log("From cache");
return cache[n];
    }else {
console.log("Calculating...");
let result=n*n;
cache[n]=result;
return result;
    }
  };
}

const square=memoizedSquare();

square(5);// Calculating...
square(5);// From cache
```

---

## Key Points

- Cache is usually an **object or Map**
- Works best with **pure functions**
  - Same input → same output
- Avoid for:
  - Functions with side effects
  - Non-deterministic functions (e.g., Math.random)

---

# Memoization in React

## 1. useMemo()

Used to memoize **values**

```
import {useMemo }from"react";

const result=useMemo(() => {
return expensiveCalculation(num);
}, [num]);
```

### Use when:

- Heavy calculations
- Prevent unnecessary recomputation2. useCallback()

---

Used to memoize **functions**

```
import {useCallback }from"react";

const handleClick=useCallback(() => {
console.log("Clicked");
}, [])
```

### Use when:

- Passing functions to child components
- Prevent unnecessary re-renders

---

## Difference: useMemo vs useCallback

| Feature  | useMemo                | useCallback            |
| -------- | ---------------------- | ---------------------- |
| Memoizes | Value                  | Function               |
| Returns  | Computed result        | Function reference     |
| Use case | Expensive calculations | Event handlers / props |

---

## 3. React.memo()

Higher Order Component (HOC)

```
constMyComponent=React.memo((props) => {
return<div>{props.name}</div>;
});
```

### Use when:

- Prevent re-render if props don’t change

---

## When NOT to use Memoization

- Small/simple calculations
- Overuse → increases memory usage
- Can make code harder to readReal-Life Analogy

---

Think of memoization like:

> “Google search suggestions”

- First time → compute results
- Next time → instantly show cached results

---

##

Displaying Day 60 notes.md.
