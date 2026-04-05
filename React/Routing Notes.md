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


## Dynamic routing


## 1. Fetching Products using FakeStore API (Axios)

Axios was used to get product data from the FakeStore API.

Axios helps us make API requests easily.
We used it inside useEffect() to fetch data when the component loads.

Basic idea:

```
useEffect(() => {
  axios.get("https://fakestoreapi.com/products")
    .then(res => setProducts(res.data));
}, []);
```

This loads all products and stores them in state.

## 2. Products Page

Displays all products from API.
Each product is shown using .map().
Every product has a link to its detail page.

Concept:

Use Link to navigate to a specific product.

```
<Link to={`/product/${product.id}`}>
  View Details
</Link>
```

## 3. Dynamic Routing (Single Product Page)

Dynamic routing is used to show data based on product ID.

We used:
useParams() from React Router

Example:

```
const { id } = useParams();
```

id comes from URL like /product/5
Then we fetch that specific product:

```
useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => setProduct(res.data));
}, [id]);
```

This shows only one product's details.

## 4. useNavigate() Hook

useNavigate() is used for programmatic navigation (without clicking a Link).

Example:

```
const navigate = useNavigate();

<button onClick={() => navigate("/")}>
  Go Home
</button>
```

Use cases:

- Redirect after login
- Go back to previous page
- Navigate on button click

## 5. Nested Routing using <Outlet />

<Outlet /> is used to render child routes inside a parent component.

Concept:
Parent route has layout (like navbar, sidebar)
Child routes render inside <Outlet />

Example Structure:

```
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

Parent Component:

```
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

<Outlet /> shows:

- /dashboard/profile: Profile component
- /dashboard/settings: Settings component

👉 This loads all products and stores them in state.

🔹 2. Products Page
Displays all products from API.
Each product is shown using .map().
Every product has a link to its detail page.

Concept:

Use Link to navigate to a specific product.
<Link to={`/product/${product.id}`}>
  View Details
</Link>
🔹 3. Dynamic Routing (Single Product Page)

Dynamic routing is used to show data based on product ID.

We used:
👉 useParams() from React Router

Example:

const { id } = useParams();
id comes from URL like /product/5
Then we fetch that specific product:
useEffect(() => {
  axios.get(`https://fakestoreapi.com/products/${id}`)
    .then(res => setProduct(res.data));
}, [id]);

👉 This shows only one product’s details.

🔹 4. useNavigate() Hook

useNavigate() is used for programmatic navigation (without clicking a Link).

Example:

const navigate = useNavigate();

<button onClick={() => navigate("/")}>
  Go Home
</button>

👉 Use cases:

Redirect after login
Go back to previous page
Navigate on button click
🔹 5. Nested Routing using <Outlet />

<Outlet /> is used to render child routes inside a parent component.

📌 Concept:
Parent route has layout (like navbar, sidebar)
Child routes render inside <Outlet />
Example Structure:
<Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>
Parent Component:
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

👉 <Outlet /> shows:

/dashboard/profile → Profile component
/dashboard/settings → Settings component
Displaying Day 55 notes.md.


# Nested Routing with Index Attribute (Declarative Routing)

In declarative routing, nested routes allow rendering child components inside a parent component using `<Outlet />`.

## Index Attribute

The index attribute is used to define a default child route.
It is rendered when the parent route path is matched but no specific child route is provided.

Example:

```
<Route path="/products" element={<Products />}>
  <Route index element={<ProductList />} />
  <Route path=":id" element={<ProductDetail />} />
</Route>
```

Explanation:

- When user visits /products → ProductList will render (because of index)
- When user visits /products/1 → ProductDetail will render

Key Points:

- index route does not have a path
- It works as the default child route
- It must be used inside a parent route
- Parent component must include `<Outlet />` to render child routes

## Introduction to Data Routing

Data Routing is a feature in React Router that handles data fetching and data updates at the route level instead of inside components.

Purpose:

- To fetch data before rendering the component
- To improve performance and user experience
- To organize data logic with routes

Traditional Approach Problem:

- Data is fetched inside components using useEffect
- Component renders first, then data loads
- Causes delay and loading states

Data Routing Approach:

- Data is fetched before the component renders
- Cleaner and more structured code

## Basic Concepts (Only Introduction Covered)

### Loader

A function used to fetch data for a route
Runs before the component is rendered

### Action

A function used to handle form submissions or data changes (like POST, DELETE)
Displaying Day 56 notes.md.