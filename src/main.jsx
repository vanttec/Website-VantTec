import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // switched to HashRouter for GitHub Pages compatibility
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
