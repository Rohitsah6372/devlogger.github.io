// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { BsFillTrash3Fill } from "react-icons/bs";
// // import { removeTodo } from "../features/todoSlice";

// function Todos() {
//   const dispatch = useDispatch();

//   const todos = useSelector((state) => state.todos.todos);
//   console.log(todos);

//   return (
//     <div>
//       <h1>TODO LISTS</h1>
//       {todos.map(
//         (
//           todo // Use map instead of forEach
//         ) => (
//           <>
//             <div key={todo.id}>
//               {todo.text}{" "}
//               <span>
//                 <BsFillTrash3Fill
//                   cursor={"pointer"}
//                   onClick={() => dispatch(removeTodo(todo.id))}
//                 />
//               </span>
//             </div>
//           </>
//         )
//       )}
//     </div>
//   );
// }

// export default Todos;
