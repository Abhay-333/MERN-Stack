# DOM Homework Tasks KODEX

## Task 1: Text Change on Button Click

**Create:**

- One paragraph
- One button

**When button is clicked:**

- If paragraph text is `Hello`, change it to `Welcome`
- If paragraph text is `Welcome`, change it to `Hello`

---

## Task 2: Change Box Color on Click

**Create:**

- One square box
- One button

**When button is clicked:**

- First click → box becomes red
- Second click → box becomes green
- Third click → box becomes blue
- Fourth click → box becomes red again

This cycle should continue.

---

## Task 3: Show and Hide a Box

**Create:**

- One button
- One box with text inside it

**When button is clicked:**

- If box is visible → hide the box
- If box is hidden → show the box again

The box should not be deleted, only hidden.

---

## Task 4: Rotate a Box Using Buttons

**Create:**

- One square box
- Two buttons: **Rotate Left** and **Rotate Right**

**When:**

- Rotate Right is clicked → box rotates 45 degrees to the right
- Rotate Left is clicked → box rotates 45 degrees to the left

Rotation should keep adding up with every click.

---

## Task 5: Number Increase and Decrease

**Create:**

- A number shown on screen (start from 0)
- Two buttons: `+` and `-`

**When:**

- `+` button is clicked → number increases by 1
- `-` button is clicked → number decreases by 1

Number should never go below 0.

---

## Task 6: Light and Dark Background

**Create:**

- One button named **Change Mode**

**When button is clicked:**

- First click → page background becomes dark and text becomes white
- Second click → page background becomes white and text becomes black

This should repeat on every click.

> Use JavaScript only.

---

## Task 7: Show Input Text on Screen

**Create:**

- One input box
- One paragraph

**When user types in the input:**

- The same text should appear inside the paragraph immediately

---

## Task 8: Change Color on Mouse Hover

**Create:**

- One box

**When:**

- Mouse goes inside the box → box color changes
- Mouse goes outside the box → box color goes back to original

Use JavaScript events, not CSS hover.

---

## Task 9: Button Works Only Once

**Create:**

- One button
- One paragraph

**When button is clicked:**

- Show message: `Button Clicked`
- Button should stop working after that

---

## Task 10: Traffic Light

**Create:**

- Three circles or boxes: red, yellow, green
- Three buttons: **Stop**, **Ready**, **Go**

# Intermediate Level DOM + Math Practice Tasks

## 1. Dice Game

Create two dice images dynamically using `document.createElement()`. Use
`Math.random()` to generate numbers (1--6). Display both dice results
and show the winner based on the higher number. Render everything
dynamically using `append()` or `appendChild()`.

## 2. Random Color Card Generator

Create a card on button click. Generate a random RGB background color
using `Math.floor()` and `Math.random()`. Set a random width and height.
Assign a unique `data-id` using `setAttribute()`.

## 3. Lottery System

Take user input (1--50). Generate a random number using `Math.ceil()`.
If the number matches user input, display "You Won" otherwise "Try
Again". Update result dynamically in the DOM.

## 4. Dynamic Image Gallery

Store image URLs in an array. On button click, pick a random image using
`Math.floor()`. Create an `<img>` element dynamically and append it to a
container. Use `getAttribute("src")` to print the image source in
console.

## 5. Progress Bar Simulator

Create a progress bar dynamically. On button click, increase progress
randomly between 10--30%. Update the width style property dynamically.
Stop progress at 100%.

## 6. Random Box Remover

Create 5 boxes dynamically. Assign each box a unique `data-id` using
`setAttribute()`. On click of a box, remove only that specific box. Use
`getAttribute()` to identify which box was clicked.

## 7. Mini Gambling UI

Generate 3 random numbers between 1--9. Display all numbers dynamically.
If all three numbers are the same, show "Jackpot". Otherwise display


# Mixed Advanced JavaScript + DOM Questions

1. **Create a function** that takes an array of numbers and returns only the numbers **greater than the average** of the array.  
   (Use functions + return + array methods)

2. Build a **theme switcher** (Light/Dark) using DOM where the selected theme is saved in **localStorage** and restored after refresh.

3. Make a **div that rotates 360°** every time you double-click it, and the rotation count should be shown inside the div.  
   (Use events + CSS + DOM)

4. Create a function that mimics `Array.prototype.map()` **without using map**, and apply it to transform an array.

5. Create a **gambling button** where clicking generates a random number from 1 to 10:
   - If number > 7 → show “You Win!”
   - Else → “Try Again!”  
     Use `Math.random`, DOM, and event listeners.

6. Using **hoisting knowledge**, predict and explain the output of a code snippet involving `var`, `let`, and a function declaration.

7. Build a **live character counter** for a textarea.
   - On typing → update count
   - If count > 100 → show red warning text

8. Create a **product list filter**:
   - Input box
   - On typing → show only items whose name startsWith the input  
     (Use arrays, filter, startsWith, DOM)

9. Make a **dynamic card generator**:
   - Button → “Add Card”
   - Creates a new card with user name, image, and delete button  
     (Use createElement, appendChild, events)

10. Create an object representing a user. Write a function that **clones the object without using spread**, updates one property, and returns the new object.
