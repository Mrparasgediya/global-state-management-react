import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RouterContextProvider from "./components/RouterComponent";
import ThemeContextProvider from "./components/ThemeContextProvider";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </RouterContextProvider>
  </React.StrictMode>
);
