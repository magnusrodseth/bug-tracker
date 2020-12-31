import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../Controllers/Redux/AuthSlice";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ name: "", password: "" });

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
          type="text"
          name="name"
          placeholder="Name"
          onChange={inputChanged}
          value={input.name}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={inputChanged}
          value={input.password}
        />
        <button type="submit" onClick={submit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;