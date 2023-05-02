import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Theme } from "react-daisyui";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme dataTheme="dark">
      <App />
    </Theme>
  </React.StrictMode>
);
