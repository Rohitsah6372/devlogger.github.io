// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//   todos: [
//     {
//       id: 1,
//       text: "Hello i am Rohit Sah",
//     },
//     {
//       id: 2,
//       text: "My father name is Nandu",
//     },
//   ], //store or state
// };

// export const todoSlice = createSlice({
//   //provide the name of the todos
//   name: "todos",
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(), //unique id
//         text: action.payload, //payload <=> data
//       };
//       state.todos.push(todo);
//     },

//     removeTodo: (state, action) => {
//       state.todos = state.todos.filter((todo) => todo.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, removeTodo } = todoSlice.actions;

// export default todoSlice.reducer;

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case action.type.ADD_NEW_TODO:
      return [action.payload, ...state];

    default:
      return state;
  }
};
