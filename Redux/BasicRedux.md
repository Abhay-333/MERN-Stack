
# Redux Toolkit – Complete Notes

Redux Toolkit simplifies Redux by reducing boilerplate and enforcing best practices.

## 1. Create Store with configureStore

The store is the central state container of your app.

```js
// store.js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
```

### Key points

- `configureStore()` replaces `createStore()`.
- Automatically sets up:
  - Redux DevTools
  - Middleware (like thunk)
- Accepts an object of reducers.

## 2. Create Slice with createSlice

A slice contains:

- State
- Reducers (logic)
- Actions (auto-generated)

```js
// counterSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

### Key points

- No need to write action types manually.
- Uses Immer, so you can write "mutating" logic safely.
- Generates:
  - Actions
  - Reducer

## 3. Register Slice in the Store

Already done in Step 1:

```js
reducer: {
  counter: counterReducer,
}
```

### State shape

```js
state = {
  counter: {
    value: 0,
  },
}
```

## 4. Wrap App with Provider

Redux needs to be connected to React using `Provider`.

```js
// main.jsx or index.js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
```

### Key points

- Makes the Redux store available globally.
- Must wrap the root component.

## 5. Subscribe to Store with useSelector

Used to read data from the store.

```js
import { useSelector } from 'react-redux'

function Counter() {
  const count = useSelector((state) => state.counter.value)

  return <h1>{count}</h1>
}
```

### Key points

- Runs on every state change.
- Component re-renders when the selected state changes.

## 6. Dispatch Actions with useDispatch

Used to update state.

```js
import { useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './counterSlice'

function Counter() {
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </>
  )
}
```

### Key points

- `dispatch()` sends actions to the reducer.
- Reducer updates state.
Displaying redux Notes.md.