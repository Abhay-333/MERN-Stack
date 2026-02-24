
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

| Event | When Triggered |
| --- | --- |
| keydown | When key pressed |
| keyup | When key released |

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

| mouseenter | mouseover |
| --- | --- |
| Does NOT bubble | Bubbles |
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

| Value | Behavior |
| --- | --- |
| pointer | Hand icon |
| default | Arrow |
| crosshair | Cross |
| not-allowed | Disabled sign |
| grab | Draggable look |

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

| Event | When Triggered |
| --- | --- |
| mousedown | When button pressed |
| mouseup | When button released |

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