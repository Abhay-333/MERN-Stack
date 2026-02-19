# JavaScript DOM – Complete Practical Guide

This guide covers:

- What is DOM
- Selecting elements
- getElementById
- getElementsByClassName
- innerHTML
- textContent
- Changing CSS with JS
- Events
- Event Listeners
- Mouse events
- Keyboard events
- Scroll & wheel
- Animation (rotating div)
- Bulb on/off project
- Like/Dislike feature
- Math.random()
- Math.ceil()

---

# 1. What is DOM?

## Definition

DOM (Document Object Model) is a programming interface that represents an HTML document as a tree of objects.

It allows JavaScript to:

- Select elements
- Modify content
- Change styles
- Handle events

---

# 2. Selecting an Element

Selecting means accessing an HTML element using JavaScript.

---

## 2.1 getElementById()

Selects element by its id.

### HTML

```html
<h1id="title">Hello</h1>
```

### JS

```jsx
let element = document.getElementById("title");
console.log(element);
```

✔ Returns single element

✔ ID must be unique

---

## 2.2 getElementsByClassName()

Selects elements by class.

### HTML

```html
<pclass="text">One</p><pclass="text">Two</p>
```

### JS

```jsx
let elements = document.getElementsByClassName("text");
console.log(elements);
```

✔ Returns HTMLCollection

✔ Multiple elements possible

---

# 3. innerHTML

## What it does

Gets or sets HTML content inside element.

```jsx
let div = document.getElementById("box");
div.innerHTML = "<h2>New Content</h2>";
```

It reads and writes HTML.

---

# 4. textContent

## What it does

Gets or sets text only (no HTML interpretation).

```jsx
div.textContent = "<h2>New Content</h2>";
```

Output will show text literally.

✔ Safer than innerHTML

---

# 5. Changing CSS with JavaScript

You can change style using `.style`

```jsx
let box = document.getElementById("box");

box.style.backgroundColor = "red";
box.style.width = "200px";
```

Property names use camelCase:

- background-color → backgroundColor

---

# 6. Events in JavaScript

Events are actions that happen in the browser:

- Click
- Scroll
- Key press
- Mouse hover

---

# 7. onclick

```html
<buttononclick="alert('Clicked')">Click</button>
```

Or:

```jsx
let btn = document.getElementById("btn");

btn.onclick = function () {
  alert("Clicked");
};
```

---

# 8. addEventListener()

Better method to handle events.

```jsx
btn.addEventListener("click", function () {
  console.log("Button clicked");
});
```

✔ Cleaner

✔ Multiple events possible

---

# 9. Double Click

```jsx
btn.addEventListener("dblclick", function () {
  console.log("Double clicked");
});
```

---

# 10. mouseEnter

```jsx
box.addEventListener("mouseenter", function () {
  box.style.backgroundColor = "blue";
});
```

Triggers when mouse enters element.

---

# 11. mouseLeave

```jsx
box.addEventListener("mouseleave", function () {
  box.style.backgroundColor = "white";
});
```

Triggers when mouse leaves element.

---

# 12. Scroll Event

```jsx
window.addEventListener("scroll", function () {
  console.log("Scrolling...");
});
```

Used for:

- Sticky header
- Infinite scroll

---

# 13. Wheel Event

Triggered when mouse wheel moves.

```jsx
window.addEventListener("wheel", function () {
  console.log("Wheel moved");
});
```

---

# 14. Keypress Event

```jsx
document.addEventListener("keypress", function (event) {
  console.log("Key pressed:", event.key);
});
```

Used for:

- Input detection
- Shortcuts

---

# 15. Animated Div Rotation

### HTML

```html
<divid="box"></div>
```

### CSS

```css
#box {
  width: 100px;
  height: 100px;
  background: red;
}
```

### JS

```jsx
let box = document.getElementById("box");
let angle = 0;
setInterval(function () {
  angle += 5;
  box.style.transform = "rotate(" + angle + "deg)";
}, 100);
```

✔ Rotates continuously

---

# 16. Bulb On/Off Project

### HTML

```html
<imgid="bulb"src="off.png"><buttonid="btn">Toggle</button>
```

### JS

```jsx
let bulb = document.getElementById("bulb");
let btn = document.getElementById("btn");
let isOn = false;

btn.addEventListener("click", function () {
  if (isOn) {
    bulb.src = "off.png";
    isOn = false;
  } else {
    bulb.src = "on.png";
    isOn = true;
  }
});
```

---

# 17. Like / Dislike Feature

### HTML

```html
<buttonid="like">Like</button><buttonid="dislike">Dislike</button><pid="status"></p>
```

### JS

```jsx
let status = document.getElementById("status");
document.getElementById("like").onclick = function () {
  status.textContent = "You liked this";
};
document.getElementById("dislike").onclick = function () {
  status.textContent = "You disliked this";
};
```

---

# 18. Math.random()

Generates random number between 0 and 1.

```jsx
console.log(Math.random());
```

---

## Random Number Between 1 and 10

```jsx
let num = Math.floor(Math.random() * 10) + 1;
console.log(num);
```

---

# 19. Math.ceil()

Rounds number UP.

```jsx
console.log(Math.ceil(4.2)); // 5
```

Displaying dom notes.md.

# JavaScript – Random, DOM Creation & Mini Projects Notes

---

# 1. Math.random()

## What is Math.random()?

Generates a random decimal number between:

```
0 (inclusive) and1 (exclusive)
```

---

## Example

```jsx
console.log(Math.random());
```

Output example:

```
0.4728392
```

---

## Random Number Between 1 and 10

```jsx
let num = Math.floor(Math.random() * 10) + 1;
console.log(num);
```

### How it works:

1. Math.random() → 0–0.999
2. × 10 → 0–9.999
3. floor() → 0–9
4. +1 → 1–10

---

# 2. Math.floor()

## What does it do?

Rounds number DOWN to nearest integer.

```jsx
console.log(Math.floor(4.9)); // 4console.log(Math.floor(4.1));// 4
```

Used commonly in random number generation.

---

# 3. Math.ceil()

## What does it do?

Rounds number UP to nearest integer.

```jsx
console.log(Math.ceil(4.1)); // 5console.log(Math.ceil(4.9));// 5
```

---

# Difference

| Method  | Behavior        |
| ------- | --------------- |
| floor() | Round down      |
| ceil()  | Round up        |
| round() | Normal rounding |

---

# 4. Gambling Game (Random Number Game)

## Concept

User guesses a number.

System generates random number.

If matched → win.

---

## Example

```jsx
let userGuess = Number(prompt("Enter number between 1 and 5"));
let randomNum = Math.floor(Math.random() * 5) + 1;
if (userGuess === randomNum) {
  alert("You Won!");
} else {
  alert("You Lost! Number was " + randomNum);
}
```

---

# 5. document.createElement()

## What is it?

Creates a new HTML element dynamically.

```jsx
let div = document.createElement("div");
```

It does NOT automatically add it to the page.

---

# 6. appendChild()

Adds created element inside a parent.

```jsx
let div = document.createElement("div");
div.textContent = "Hello";
document.body.appendChild(div);
```

✔ Adds as last child

✔ Only accepts one node

---

# 7. append()

Similar to appendChild but more flexible.

```jsx
let p = document.createElement("p");
p.textContent = "Hi";
document.body.append(p);
```

Difference:

| appendChild() | append()                |
| ------------- | ----------------------- |
| One node only | Multiple values allowed |
| Older method  | Modern method           |

---

# 8. setAttribute()

Used to set attribute of element.

---

## Example

```jsx
let img = document.createElement("img");

img.setAttribute("src", "image.jpg");
img.setAttribute("alt", "Profile");
document.body.append(img);
```

---

# 9. getAttribute()

Gets value of attribute.

```jsx
let value = img.getAttribute("src");
console.log(value);
```

---

# 10. Random Quotes Generator

## Concept

Store quotes in array.

Select random index.

Display quote.

---

## Example

### HTML

```html
<pid="quote"></p><buttonid="btn">New Quote</button>
```

---

### JavaScript

```jsx
let quotes = [
  "Stay focused.",
  "Work hard.",
  "Consistency is key.",
  "Never give up.",
];
let quoteText = document.getElementById("quote");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
```

Displaying more on dom.md.
