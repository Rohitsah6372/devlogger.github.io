import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BsFillTrashFill, BsFillPenFill } from "react-icons/bs";
import { removeTodo, EditTodo } from "../Slice/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  const dispatch = useDispatch();

  const handleRemoveTodo = (todoId) => {
    dispatch(removeTodo(todoId)); // Dispatch the removeTodo action with the todo ID
  };

  const handleEdit = (todo) => {
    dispatch(
      EditTodo({
        id: todo.id,
        text: todo.text,
      })
    );
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <div>
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>
              {todo.text}
              <BsFillPenFill
                cursor="pointer"
                onClick={() => handleEdit(todo)} // Call the function with todo ID
              />

              <BsFillTrashFill
                cursor="pointer"
                onClick={() => handleRemoveTodo(todo.id)} // Call the function with todo ID
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Todos;
