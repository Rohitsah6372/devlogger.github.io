import React from "react";
import { toast } from "react-toastify";

import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = formData;
  const { isLoading, user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate("/");
    }

    // Dispatch reset when the component unmounts
    dispatch(reset());
  }, [isError, isSuccess, user, navigate, dispatch, message]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("succeed");

    const userDate = {
      email,
      password,
    };

    dispatch(login(userDate));
  };

  //check for loading

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt />
          Login
        </h1>
        <p>Please login to get support</p>
      </section>

      <section className="form">
        <form action="" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              className="form-control"
              placeholder="Enter Your Email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="password"
              name="password"
              value={password}
              className="form-control"
              placeholder="Enter Your Password"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
