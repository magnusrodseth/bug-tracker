import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../Controllers/Redux/AuthSlice";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ email: "", password: "" });

  const inputChanged = (event) => {
    setInput({ ...input, [event.target.email]: event.target.value });
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
