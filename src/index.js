import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider
      router={rootRouter}
      fallbackElement={<div>Loading...</div>}
    />
  </React.StrictMode>
);
