import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//load everything in our .env. Tried but didn't work
// require("dotenv").config();
// console.log(process.env)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
