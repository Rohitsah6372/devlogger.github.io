import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login  } from "../Slicers/MainSlicer";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLogin = {
      email,
      password,
    };
    // console.log(newLogin);

    dispatch(login(newLogin));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Enter your email"
              className="login"
              id="login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter your password"
              value={password}
              className="login"
              id="login"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
