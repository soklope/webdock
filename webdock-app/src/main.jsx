import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global-styling/Global.scss"

window.apiHostName = "localhost:8080/api/v1";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
