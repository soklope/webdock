import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global-styling/Global.scss"

window.apiHostName = "http://localhost:1234/api";
// window.apiHostName = "http://localhost:1234/api";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
