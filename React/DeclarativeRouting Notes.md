## What is Routing in React?

Routing is used to navigate between different components/pages in a React application without reloading the entire page.

It enables a Single Page Application (SPA) behavior where only the required component updates based on the URL.

## React Router (Re-introduction)

React Router is a library that helps in handling routing in React apps.

Key Idea:
URL changes to Component changes
No full page reload to Faster experience

## Declarative Routing (Core Concept)

React Router follows a declarative approach, meaning you define routes using components instead of manual logic.

Example Concept:

```
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

You declare what UI should render for a path, React handles the rest.

## BrowserRouter

BrowserRouter is used to enable routing using the browser’s history API.

Role:
Wraps the entire app
Tracks URL changes
Controls navigation without page reload

It acts as the routing provider for your application.

## Dynamic Routing

Dynamic routing allows you to create routes with variable parameters.

Example:

```
<Route path="/product/:id" element={<Product />} />
```

:id is a dynamic value (changes based on URL)

## useParams() Hook

useParams() is used to access dynamic values from the URL.

Example:

```
const { id } = useParams();
```

If URL is /product/101
id = 101

## Real Use Case (E-commerce)

- /product/1: Product 1 details
- /product/2: Product 2 details

Same component, different data based on URL
Displaying Day 54 notes.md.
