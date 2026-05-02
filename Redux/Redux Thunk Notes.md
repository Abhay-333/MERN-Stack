
Day 69 Notes

1) Thunk (Redux / Redux Toolkit)

What is Thunk?

Thunk = A function that returns another function

In Redux, thunk is used for:
- Async operations (API calls, delays, side effects)
- Dispatching actions after async work completes

Without thunk → Redux only supports synchronous actions
With thunk → You can handle async logic

How Thunk Works Internally

Normally:

dispatch({ type: "DATA_FETCHED" })

With thunk:

dispatch(function(dispatch, getState) {
    // async work here
})

Redux Thunk middleware intercepts this function and executes it.

Example (Basic Redux Thunk)

const fetchData = () => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });

    try {
      const res = await fetch("https://api.com/data");
      const data = await res.json();

      dispatch({ type: "SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR" });
    }
  };
};

Redux Toolkit Version (Best Practice)

Using createAsyncThunk:

import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async () => {
    const res = await fetch("https://api.com/users");
    return res.json();
  }
);

In slice:

extraReducers: (builder) => {
  builder
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    .addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
}

Key Concepts
- dispatch: trigger actions
- getState: access current state
- Middleware handles a function instead of an object
- Used for API calls, authentication, etc.

Interview Line

"Thunk allows us to write async logic in Redux by returning a function instead of an action."

2) 4-Layer Architecture (Backend / MERN)

This is a clean backend structure used in scalable apps.

Overview
Client → Route → Controller → Service → Repository → Database

4 Layers Explained

Route Layer
Entry point (API endpoints)
- Defines URL
- Calls controller

Example:
router.get("/users", getUsers);

Controller Layer
Handles request and response
- Gets data from request
- Calls service
- Sends response

Example:
export const getUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

Service Layer
Business logic
- Core logic lives here
- Independent of Express

Example:
export const getAllUsers = async () => {
  return await userRepository.findUsers();
};

Repository Layer
Database interaction
- Talks to DB (MongoDB, SQL)
- Only DB queries here

Example:
export const findUsers = async () => {
  return await User.find();
};

Why Use 4-Layer Architecture?
Benefits:
- Clean code separation
- Easy debugging
- Scalable
- Testable
- Reusable logic

Real Example Flow
GET /users
   ↓
Route
   ↓
Controller
   ↓
Service
   ↓
Repository
   ↓
Database

Folder Structure (MERN)
src/
 ├── routes/
 ├── controllers/
 ├── services/
 ├── repositories/
 ├── models/

Interview Line

"4-layer architecture separates concerns into route, controller, service, and repository for better scalability and maintainability."
Displaying Day 69 notes.md.