import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../Controllers/Redux/AuthSlice";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });

  const inputChanged = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    dispatch(signIn(input));
    event.preventDefault();
  };

  return (
    <div className="login-bg">
      <form action="#" className="login-form">
        <h1>Login</h1>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          onInput={inputChanged}
          value={input.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onInput={inputChanged}
          value={input.password}
          required
        />

        <Link to="/" className="nav-link">
          <button type="submit" onClick={submit}>
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
