import React, { useContext } from "react";
import AlertConetxt from "./AlertContext";

export default function Alert() {
  const { alert } = useContext(AlertConetxt);

  return (
    alert !== null && (
      <p>{alert.type === "error" && <p>Enter Something to Search</p>}</p>
    )
  );
}
