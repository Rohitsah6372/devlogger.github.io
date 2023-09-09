import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello My name is Rohit Sah",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo", // The name of the slice
  initialState, // Initial state defined above
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generate a unique id
        text: action.payload, // Get the payload from the action
      };
      state.todos.push(todo); // Add the new todo to the todos array
    },

    removeTodo: (state, action) => {
      // Filter out the todo with the specified id
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    EditTodo: (state, action) => {
      const todo = {
        id: action.payload.id,
        text: action.payload.text,
        
      };
      console.log(todo);
    },
  },
});

// Export the action creators
export const { addTodo, removeTodo, EditTodo } = todoSlice.actions;

// Export the reducer
export default todoSlice.reducer;
