import { createSlice } from "@reduxjs/toolkit";
const listSlice = createSlice({
  name: "lists",
  initialState: {
    lists: [
      {
        _id: 1,
        taskName: "Learn React",
        description: "Practice components, props and state management.",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        _id: 2,
        taskName: "Build Todo App",
        description: "Create frontend and backend using MERN stack.",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  },
  reducers: {
    createList: (state, action) => {
      state.lists.push(action.payload);
    },
    updateList: (state, action) => {
      const updateData = action.payload;
      const index = state.lists.findIndex((item) => item._id === updateData._id);

      if (index !== -1) {
        state.lists[index] = { ...state.lists[index], ...updateData };
      }
    },
    deleteList: (state, action) => {
      state.lists = state.lists.filter((item) => item._id !== action.payload);
    },
  },
});

export let { createList, updateList, deleteList } = listSlice.actions;
export default listSlice.reducer;
