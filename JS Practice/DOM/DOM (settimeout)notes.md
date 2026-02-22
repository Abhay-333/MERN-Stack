
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