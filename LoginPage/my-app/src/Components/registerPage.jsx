import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../Slicers/MainSlicer";
import { Link } from "react-router-dom";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert("Password Mismatch");
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    // console.log(userData);
    dispatch(register(userData));

    // console.log("Registration data:", { name, email, password });
    setName("");
    setEmail("");
    setPassword("");
    setPassword2("");
  };

  return (
    <div>
      <h1>Register Here</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="name"
              id="name"
              value={name}
              placeholder="Enter Your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <input
              type="email"
              className="email"
              id="email"
              value={email}
              placeholder="Enter Your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              className="password"
              id="password"
              value={password}
              placeholder="Enter Your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              className="password2"
              id="password2"
              value={password2}
              placeholder="Confirm Your password"
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Register</button>
            <div>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </div>
            <div>
              <Link to="/">
                <button>Home</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
