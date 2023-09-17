import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { StoreCartProvider } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreCartProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreCartProvider>
);
