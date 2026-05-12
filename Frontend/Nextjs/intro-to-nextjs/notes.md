
## Next.js Class Notes (Notion Style)

---

# Next.js Overview

Next.js is a React framework used to build fast, scalable, and SEO-friendly web applications.

It adds powerful features on top of React like routing, rendering strategies, and backend support.

**Key Points:**

- Built on React
- File-based routing system
- Supports SSR, CSR, SSG, ISR
- Better performance and SEO
- Used in production-grade apps

---

# SEO (Search Engine Optimization)

SEO means optimizing a website so it ranks higher on search engines like Google.

**Why Next.js is good for SEO:**

- Pages are pre-rendered (HTML already ready)
- Faster page loading
- Easy indexing by search engines

---

# Rendering in Next.js

Next.js provides different rendering strategies depending on use case.

---

## 1. SSR (Server Side Rendering)

Pages are rendered on the server at every request.

All UI comes from backend

**Flow:**

User request → Server generates HTML → Browser receives page

**Pros:**

- Good SEO
- Always fresh data

**Cons:**

- Slower than static pages

---

## 2. CSR (Client Side Rendering)

Pages are rendered in the browser using JavaScript.

**Example:**

React default behavior

**Pros:**

- Fast after initial load
- Good for dashboards

**Cons:**

- Weak SEO
- Initial load can be slow

---

## 3. SSG (Static Site Generation)

Pages are generated at build time.

**Example:**

Blogs, landing pages

**Pros:**

- Very fast
- Highly optimized

**Cons:**

- Data is not real-time

---

## 4. ISR (Incremental Static Regeneration)

Static pages that can update after deployment.

**Example:**

E-commerce product pages

**Pros:**

- Best of SSG + SSR
- Fast + updated content

---

# Next.js vs React.js

| Feature | React.js | Next.js |
| --- | --- | --- |
| Routing | Manual (React Router) | File-based routing |
| SEO | Weak | Strong |
| Rendering | CSR only | SSR + SSG + CSR + ISR |
| Backend support | No | Yes (API routes) |
| Performance | Medium | High |

**Conclusion:**

Next.js is more powerful and production-ready than React.js

---

# Create Next.js App

Command:

```bash
npx create-next-app@latest
```

OR

```bash
npm create next-app@latest
```

---

# File-Based Routing

In Next.js, routes are created automatically based on folder structure.

**Example:**

```
app/
 ├── page.js → /
 ├── about/page.js → /about
 ├── contact/page.js → /contact
```

**Key Points:**

- Folder name = route name
- page.js = UI of that route
- No need of React Router

---

# Nested Routing

Routes inside routes are called nested routing.

**Example:**

```
app/
 ├── dashboard/
 │    ├── page.js → /dashboard
 │    ├── settings/page.js → /dashboard/settings
```

---

# Dynamic Routing

Dynamic routes are used when values are not fixed.

**Example:**

```
app/
 ├── product/
 │    └── [id]/page.js → /product/1, /product/2
```

**Code Example:**

```jsx
export default function Product({ params }) {
  return <h1>Product ID: {params.id}</h1>
}
```

---

# Summary

- Next.js is a React framework for production apps
- SEO is strong due to SSR and SSG
- Multiple rendering strategies: SSR, CSR, SSG, ISR
- File-based routing removes manual setup
- Supports nested and dynamic routing
- Better performance than React.js
Displaying Day 73 notes.md.