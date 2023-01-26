import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RouterContextProvider from "./components/RouterComponent";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterContextProvider>
      <App />
    </RouterContextProvider>
  </React.StrictMode>
);
