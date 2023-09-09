import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/register">
          <button>Register here</button>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <button>Login here</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
