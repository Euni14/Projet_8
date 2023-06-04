import React from "react";
import ReactDOM from "react-dom/client";
import App from "./compenents/App";
import "./styles/index.css";

/*https://efficientuser.com/2022/10/07/reactdom-render-is-no-longer-supported-in-react-18/ */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
