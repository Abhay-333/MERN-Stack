Lazy Data Fetching – Concept

Lazy data fetching is a technique where data is not loaded all at once; instead, it is fetched only when needed. The primary objective is to improve performance and provide a smoother user experience by reducing the initial load time.

Real-Life Example

Initial load → 50 products
User scrolls
Next 50 products are fetched automatically
Data keeps appending as the user continues scrolling

Working Flow

Initial API call fetches a limited dataset (e.g., 50 items)
User scrolls through the content
System detects that the user is near the bottom
A new API request is triggered
Newly fetched data is appended to the existing dataset

Key Components

Pagination
Data is divided into chunks (pages) to manage loading efficiently

Page 1 → items 1–50
Page 2 → items 51–100

Scroll Detection
System detects the user’s scroll position using:

Scroll events
Intersection Observer API

API Request Example
GET /products?page=2&limit=50

State Management

Existing data is stored
New data is appended to the existing state

Basic Logic

if (userReachedBottom) {
fetchNextPage();
appendData();
}

Types of Lazy Data Fetching

Infinite Scroll
Data loads automatically as the user scrolls
Load More Button
User manually triggers the next data fetch
On-Demand Loading
Data is fetched based on specific user actions

Advantages

Faster initial loading
Improved user experience
Optimized server usage
Better memory efficiency

Disadvantages

SEO challenges (content not fully loaded initially)
Managing scroll position can be complex
Risk of multiple or redundant API calls
Difficulty accessing footer content

Best Practices

Debounce or throttle scroll events
Display loading indicators
Implement proper error handling
Prevent duplicate API calls
Detect when all data has been loaded

Interview-Ready Summary

Lazy data fetching is a strategy where data is loaded incrementally instead of all at once. It typically uses pagination and scroll detection to trigger additional API calls when the user reaches the end of the current content. The new data is then appended to the existing dataset, improving both performance and user experience.
Displaying Day 72 Notes.md.
