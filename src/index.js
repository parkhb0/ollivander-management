import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { worker } from "./mocks/worker";
import App from "./App";
if (process.env.NODE_ENV === "development") {
  console.log("1");
  worker.start();
}

const router = "";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} fallbackElement={<div>Loading...</div>} /> */}
  </React.StrictMode>
);
