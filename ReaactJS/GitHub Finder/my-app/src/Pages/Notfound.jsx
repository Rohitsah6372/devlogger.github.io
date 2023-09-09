import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div>
      <div className="container">
        <h1>Ooops</h1>
        <p>404 - Page Not Found</p>
        <Link to="/">
          <FaHome />
          Back To Home
        </Link>
      </div>
    </div>
  );
}
