import React, { useRef } from "react";

export default function UserRefExample1() {
  const inputRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("inputRef value = " + inputRef.current.value);

    //inputRaf.value => gives the DOM element
    inputRef.current.style.backgroundColor = "red";
  };

  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          ref={inputRef}
          className="form-control col-4"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
