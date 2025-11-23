
# Project Working Flow and Overview

Imagine a mini LeetCode/HackerRank–style platform, but simplified and custom-built.

### Real-life Flow

1.  Tum website open karte ho
    
2.  Coding problems ki list dikhti hai (Easy/Medium/Hard)
    
3.  Ek problem select karte ho
    
4.  Code editor mein solution likhte ho
    
5.  “Run Tests” button dabate ho
    
6.  Tumhara code multiple test cases par run hota hai
    
7.  Results show hote hain (Pass/Fail)
    
8.  Agar sahi hai toh leaderboard mein tumhara score add hota hai
    
9.  Progress track hota hai ki kitne problems solve kiye
    

----------

# Core Features & JS Concepts Breakdown

## **Feature 1: Problem Management System**

**Concepts Used:**

-   Objects & Arrays — Problems ko store karna
    
-   Array Methods (`map`, `filter`, `find`, `sort`) — Problem filtering/search
    
-   Destructuring — Clean data access
    
-   Template Literals — Dynamic HTML generation
    

----------

## **Feature 2: Code Editor with Syntax Highlighting**

**Concepts Used:**

-   DOM Manipulation — Textarea handling
    
-   Event Listeners (`input`, `keydown`, `paste`)
    
-   Regular Expressions — Syntax detection
    
-   `localStorage` — Code auto-save
    
-   Debouncing — Performance optimization
    

----------

## **Feature 3: Code Execution Engine**

**Concepts Used:**

-   `eval()` / Function Constructor — Code execution (carefully!)
    
-   `try-catch` — Error handling
    
-   Promises — Async execution
    
-   `setTimeout` — Execution timeout
    
-   Closures — Secure scope
    

----------

## **Feature 4: Timer System**

**Concepts Used:**

-   `setInterval` / `clearInterval` — Timer countdown
    
-   Date Object — Time calculations
    
-   Callbacks — Timer completion
    
-   State Management — Timer tracking
    

----------

## **Feature 5: Test Case Runner**

**Concepts Used:**

-   Higher-order Functions — Test execution
    
-   Array Methods (`every`, `some`, `reduce`)
    
-   Deep Comparison — Output validation
    
-   `async/await` — Sequential testing
    

----------

## **Feature 6: Leaderboard System**

**Concepts Used:**

-   `localStorage` / `sessionStorage` — Data persistence
    
-   Sorting algorithms — Rank calculation
    
-   JSON (`parse`, `stringify`)
    
-   Array Manipulation — Score updates
    

----------

## **Feature 7: Progress Tracker**

**Concepts Used:**

-   Classes & OOP — User session management
    
-   Getters/Setters — Data encapsulation
    
-   Map/Set — Unique problem tracking
    
-   Event Emitters — Progress updates