import React from "react";
import { createRoot } from "react-dom/client"; // Corrected import statement
import "./index.css";
import App from "./App";

// Use createRoot() correctly
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
