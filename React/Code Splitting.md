
# Code Splitting in React

## What is Code Splitting?

Code Splitting is a performance optimization technique where your app is split into smaller bundles (chunks) and loaded on demand instead of loading the entire app at once.

### Improves:

- Initial load time
- Performance
- User experience

## Why Code Splitting?

### Without it:

- Entire JS bundle loads → slow initial load

### With it:

- Only required code loads → faster app

## React.lazy()

React.lazy() is used to dynamically import components.

```javascript
import React, { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
```

Component loads only when needed

## Suspense

Used to wrap lazy-loaded components and handle loading state.

```javascript
import { Suspense } from "react";

<Suspense fallback={<h1>Loading...</h1>}>
  <Dashboard />
</Suspense>
```

## fallback

UI shown while component is loading

### Examples:

- Loader spinner
- Skeleton UI
- "Loading..." text

## Full Example

```javascript
import React, { lazy, Suspense } from "react";

const Profile = lazy(() => import("./Profile"));

function App() {
  return (
    <Suspense fallback={<h2>Loading Profile...</h2>}>
      <Profile />
    </Suspense>
  );
}
```

## Where to Use Code Splitting?

- Routes (most common)
- Large components
- Admin dashboards
- Feature-based modules

## Advantages

- Faster initial load
- Better performance
- Reduced bundle size

## Common Mistakes

- Not using Suspense
- Too many small chunks (over-splitting)
- No proper fallback UI

# TanStack Query (React Query)

## What is TanStack Query?

TanStack Query is a powerful library for data fetching, caching, synchronization, and server-state management in React apps.

It replaces:

- Manual useEffect + fetch
- Complex state handling for API data

## Why Use TanStack Query?

- Automatic caching
- Background data updates
- Loading & error states handled
- Optimized performance

## Installation

```
npm install @tanstack/react-query
```

## Setup Query Client

```javascript
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

<QueryClientProvider client={queryClient}>
  <App />
</QueryClientProvider>;
```

## useQuery (GET Request)

```javascript
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("/api/users");
  return res.json();
};

const { data, isLoading, error } = useQuery({
  queryKey: ["users"],
  queryFn: fetchUsers,
});
```

## How it Works

- queryKey → unique identifier
- queryFn → function that fetches data

### Returns:

- data
- isLoading
- error

## useMutation (POST/PUT/DELETE)

```javascript
import { useMutation } from "@tanstack/react-query";

const mutation = useMutation({
  mutationFn: (newUser) =>
    fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(newUser),
    }),
});
```

## Caching Mechanism

TanStack Query:

- Stores API data in cache
- Reuses data instead of refetching
- Automatically refetches when needed

## Important Features

- Background refetching
- Pagination & infinite scroll
- Query invalidation
- DevTools support

## Example with UI

```javascript
if (isLoading) return <h1>Loading...</h1>;
if (error) return <h1>Error occurred</h1>;

return data.map((user) => <p key={user.id}>{user.name}</p>);
```

## Best Practices

- Use meaningful queryKey
- Avoid unnecessary refetch
- Use staleTime for caching control

## When NOT to Use?

- Simple apps with minimal API calls
- Static data
Displaying Day 61 notes.md.