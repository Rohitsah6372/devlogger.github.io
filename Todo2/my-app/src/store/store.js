import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slice/todoSlice"; // Import the reducer, not the slice

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Use an object to specify the reducer for each slice
    // You can add more reducers here if needed
  },
});
