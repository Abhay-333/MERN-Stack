# JavaScript Events – Mouse, Keyboard & Pointer Events Notes

---

# 1. mousemove()

## What is mousemove?

The `mousemove` event triggers **whenever the mouse pointer moves over an element**.

---

## Syntax

```
element.addEventListener("mousemove",function(event) {
console.log(event.clientX,event.clientY);
});
```

---

## Example

```
document.addEventListener("mousemove",function(e) {
console.log("X:",e.clientX,"Y:",e.clientY);
});
```

### Useful Properties

- `event.clientX` → X position
- `event.clientY` → Y position
- `event.target` → Element being hovered

---

## Use Cases

- Custom cursor
- Drawing apps
- Hover animations
- Parallax effects

---

# 2. keydown()

## What is keydown?

Triggered when a key is pressed down.

---

## Syntax

```
document.addEventListener("keydown",function(event) {
console.log(event.key);
});
```

---

## Example

```
document.addEventListener("keydown",function(e) {
if (e.key==="Enter") {
console.log("Enter pressed");
  }
});
```

---

## Useful Properties

- `event.key`
- `event.code`
- `event.ctrlKey`
- `event.shiftKey`

---

## Difference

| Event   | When Triggered    |
| ------- | ----------------- |
| keydown | When key pressed  |
| keyup   | When key released |

---

# 3. wheel()

## What is wheel event?

Triggered when mouse wheel scrolls.

---

## Example

```
window.addEventListener("wheel",function(e) {
console.log("Scroll direction:",e.deltaY);
});
```

---

## Properties

- `deltaY > 0` → scroll down
- `deltaY < 0` → scroll up

---

## Use Cases

- Custom scroll effects
- Zoom in/out
- Scroll animations

---

# 4. mouseenter

Triggered when mouse enters an element.

```
element.addEventListener("mouseenter",function() {
console.log("Mouse entered");
});
```

✔ Does NOT bubble.

---

# 5. mouseout

Triggered when mouse leaves element.

```
element.addEventListener("mouseout",function() {
console.log("Mouse left");
});
```

Bubbles to parent.

---

# 6. mouseenter vs mouseover

| mouseenter                   | mouseover                                 |
| ---------------------------- | ----------------------------------------- |
| Does NOT bubble              | Bubbles                                   |
| Only triggers once per entry | Triggers multiple times on child elements |

---

# 7. Pointer Events

Pointer events are modern events that handle:

- Mouse
- Touch
- Pen
- Stylus

They unify all input types.

---

## Common Pointer Events

```
element.addEventListener("pointerdown",function() {});
element.addEventListener("pointerup",function() {});
element.addEventListener("pointermove",function() {});
```

---

## Why Use Pointer Events?

Works on touch devices

Works on stylus

Works on mouse

Single unified system

---

# 8. Cursor Events

Cursor behavior can be controlled using CSS.

---

## Change Cursor

```
button {
  cursor:pointer;
}
```

---

## Common Cursor Types

| Value       | Behavior       |
| ----------- | -------------- |
| pointer     | Hand icon      |
| default     | Arrow          |
| crosshair   | Cross          |
| not-allowed | Disabled sign  |
| grab        | Draggable look |

---

# 9. Click Events

## click

Triggered when element is clicked.

```
button.addEventListener("click",function() {
console.log("Clicked");
});
```

---

## dblclick

Triggered on double click.

```
button.addEventListener("dblclick",function() {
console.log("Double clicked");
});
```

---

## mousedown vs mouseup

| Event     | When Triggered       |
| --------- | -------------------- |
| mousedown | When button pressed  |
| mouseup   | When button released |

---

# 10. Real Example – Mouse Position Tracker

```
letbox=document.getElementById("box");

box.addEventListener("mousemove",function(e) {
box.textContent="X: "+e.clientX+" Y: "+e.clientY;
});
```

---

# 11. Real Example – Keyboard Movement

```
letposition=0;
letbox=document.getElementById("box");

document.addEventListener("keydown",function(e) {
if (e.key==="ArrowRight") {
position+=10;
box.style.transform="translateX("+position+"px)";
  }
});
```

---

Displaying JavaScript Events.md.

# JavaScript Notes – Wheel Event, deltaY, NodeList & childNodes

## 1. Wheel Event

### What is wheel?

The wheel event is triggered when the user rotates the mouse wheel.

- Detects scroll direction and scroll intensity

### Syntax

```javascript
element.addEventListener("wheel", function (event) {
  console.log("Wheel moved");
});
```

### Example

```javascript
window.addEventListener("wheel", function (e) {
  console.log(e.deltaY);
});
```

### When is it Used?

- Custom scrolling
- Zoom in/out features
- Parallax effects
- Scroll animations

---

## 2. event.deltaY

### What is deltaY?

`event.deltaY` tells the vertical scroll amount. It shows direction + speed.

### Behavior

| deltaY Value | Meaning        |
| ------------ | -------------- |
| Positive     | Scrolling down |
| Negative     | Scrolling up   |
| Larger value | Faster scroll  |

### Example

```javascript
window.addEventListener("wheel", function (e) {
  if (e.deltaY > 0) {
    console.log("Scrolling Down");
  } else {
    console.log("Scrolling Up");
  }
});
```

### Important Notes

- `deltaX` → horizontal scroll
- `deltaY` → vertical scroll
- `deltaZ` → depth scroll (rare)

---

## 3. NodeList

### What is a NodeList?

A NodeList is a collection of DOM nodes. It is returned by methods like:

- `querySelectorAll()`
- `childNodes`

### Example

```javascript
let items = document.querySelectorAll("p");
console.log(items);
```

This returns a NodeList.

### NodeList Characteristics

- Looks like an array
- Has `.length`
- Can be looped
- Not a real array
- Cannot use array methods directly (older browsers)

### Looping Through NodeList

```javascript
items.forEach(function (item) {
  console.log(item.textContent);
});
```

### NodeList vs HTMLCollection

| Feature | NodeList                         | HTMLCollection     |
| ------- | -------------------------------- | ------------------ |
| Type    | Static (querySelectorAll)        | Live               |
| Content | Includes text nodes (childNodes) | Only element nodes |
| forEach | Supports                         | Limited support    |

---

## 4. childNodes

### What is childNodes?

`childNodes` returns ALL child nodes of an element. This includes:

- Element nodes
- Text nodes
- Comment nodes

### Example

```javascript
let parent = document.getElementById("container");
console.log(parent.childNodes);
```

### Important Behavior

HTML:

```html
<div id="box">
  <p>Hello</p>
</div>
```

Because of spacing/line breaks, `childNodes` may include text nodes.

So result might be:

```
[text, <p>, text]
```

### childNodes vs children

| Feature | childNodes                    | children               |
| ------- | ----------------------------- | ---------------------- |
| Content | Includes text & comment nodes | Only element nodes     |
| Type    | Returns NodeList              | Returns HTMLCollection |

### Example

```javascript
console.log(parent.children);
```

✔ Cleaner if you only want element nodes.

### Practical Example

```javascript
let container = document.getElementById("box");

container.childNodes.forEach(function (node) {
  console.log(node.nodeType);
});
```

### nodeType Values

| nodeType | Meaning      |
| -------- | ------------ |
| 1        | Element node |
| 3        | Text node    |
| 8        | Comment node |

### Real Use Case Example – Remove Text Nodes

```javascript
let nodes = container.childNodes;

nodes.forEach(function (node) {
  if (node.nodeType === 3) {
    node.remove();
  }
});
```

Displaying day 28.md.
