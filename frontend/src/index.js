import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import App from "./App";

// Reducers
import AuthReducer from "./Controllers/Redux/AuthSlice";
import BugReducer from "./Controllers/Redux/BugSlice";
import UserReducer from "./Controllers/Redux/UserSlice";

// Redux configuration
const RootReducer = combineReducers({
  auth: AuthReducer,
  bugs: BugReducer,
  user: UserReducer,
});

const store = configureStore({
  reducer: RootReducer,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
