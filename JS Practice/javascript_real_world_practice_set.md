# ⚔️ JavaScript Real-World Practice Set (10 Questions)

Each question includes a real-world problem + macro and micro steps.

---

## 💡 Q1: Bookmark Manager (Mini Chrome Extension Clone)
**Problem:** Build a widget that lets users save (title + URL), display, and persist bookmarks.

**Steps:**
1. HTML inputs (title, URL) + button + empty `<ul>`
2. Capture `.value`
3. Validate URL (`startsWith("http")`)
4. Create bookmark object
5. Push to array
6. Save array to `localStorage`
7. Render `<li>` with `<a target="_blank">`
8. On page load → fetch & render saved bookmarks

---

## 💡 Q2: Dynamic Filter on Product List
**Problem:** Add real-time product search.

**Steps:**
1. HTML: search input + product cards
2. Add `input` listener
3. Get search text
4. Filter array (`includes`)
5. Clear UI
6. Re-render filtered cards

---

## 💡 Q3: Task Tracker with Date Filter
**Problem:** Track tasks and filter past/upcoming/all.

**Steps:**
1. Inputs: task, date, status
2. Add task to array
3. Compare dates (`new Date()`)
4. Filter based on condition
5. Render filtered tasks
6. Use ternary or multiple filters

---

## 💡 Q4: Image Previewer with Validation
**Problem:** Preview uploaded image + validate JPEG/PNG under 2MB.

**Steps:**
1. File input + preview div
2. Add `change` listener
3. Validate MIME type
4. Validate size (`file.size`)
5. Use `URL.createObjectURL`
6. Show preview

---

## 💡 Q5: Comment System with Replies
**Problem:** Basic comments with one-level replies.

**Steps:**
1. Input field
2. Store comments: `{ id, text, replies: [] }`
3. Render with `.map()`
4. Reply button per comment
5. Show reply input
6. Push reply to correct comment
7. Re-render

---

## 💡 Q6: OTP Timer (30s Countdown)
**Problem:** Disable resend until timer completes.

**Steps:**
1. Button + countdown text
2. On click → disable button
3. Use `setInterval`
4. Update DOM every second
5. Clear interval + enable button at 0

---

## 💡 Q7: Tabs UI with Dynamic Content
**Problem:** Switch content between About | Projects | Contact.

**Steps:**
1. Buttons + content div
2. Add click listeners
3. Use switch/object to show content
4. Inject into DOM
5. Highlight active tab

---

## 💡 Q8: Expense Tracker with Monthly Filter
**Problem:** Track expenses & show monthly total.

**Steps:**
1. Inputs: name, amount, date
2. Push to array
3. Save to `localStorage`
4. Month dropdown
5. Filter by month
6. Render list
7. Sum total

---

## 💡 Q9: Form AutoSave (Recovery)
**Problem:** Auto-save user text every few seconds.

**Steps:**
1. Form
2. Track input changes
3. Debounce or timed save
4. Save to `localStorage`
5. On load → check saved data
6. Restore fields

---

## 💡 Q10: Sorting UI (Frontend Only)
**Problem:** Sort student list by name/age/marks.

**Steps:**
1. Student array
2. Sort buttons
3. Use `.sort()`
4. Re-render list
5. Optional toggle (asc/desc)

---

If you want, I can:
- Bundle these into a worksheet
- Add visual diagrams
- Create GitHub starter templates

Want **10 harder questions** in the same structure?