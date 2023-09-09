import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slice/todoSlice";

function AddTodos() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    //this will go as payload data
    dispatch(addTodo(input));
  };

  return (
    <div>
      <h1>TODO</h1>
      <div>
        <form action="" onSubmit={onSubmit}>
          <input
            type="text"
            className="add"
            id="add"
            placeholder="Enter the data for todo list"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div>
            <button>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTodos;
