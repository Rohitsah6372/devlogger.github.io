import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addTodo } from "../features/todoSlice";
import { addNewTodo } from "../actions/axios";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(input));
    setInput("");
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Enter a todo"
          onChange={(e) => setInput(e.target.value)}
        />

        <button type="submit" className="add" id="add">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
