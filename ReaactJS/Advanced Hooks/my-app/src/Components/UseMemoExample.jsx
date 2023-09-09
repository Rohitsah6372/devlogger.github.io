import React, { useEffect, useMemo, useRef, useState } from "react";

export default function UseMemoExample() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  //   const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  const render = useRef(1);

  useEffect(() => {
    render.current = render.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        className="form-control"
        onChange={(e) => setNumber(e.target.value)}
      />

      <h2 className="my-3">
        Sqrt of {number} is : {sqrt}
      </h2>
      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>
      <h3>Renders : {render.current}</h3>
    </div>
  );

  //Expensive function
  function getSqrt(n) {
    for (let i = 0; i < 1000; i++) console.log(i);

    return Math.sqrt(n);
  }
}
