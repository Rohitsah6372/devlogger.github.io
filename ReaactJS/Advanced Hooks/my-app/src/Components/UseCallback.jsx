import React, { useCallback, useState } from "react";

export default function UseCallback() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, "SomeTask"]);
  }, [setTasks]);

  return (
    <div>
      <Button className="btn btn-primary" addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log("Button rendered");

  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}></button>
    </div>
  );
});
