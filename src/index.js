import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";
import { RouterProvider } from "react-router-dom";
import rootRouter from "./router/Router";
import { ThemeProvider } from "styled-components";
import theme from "./lib/styles/theme";
import { SkeletonTheme } from "react-loading-skeleton";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <SkeletonTheme baseColor="#cccccc" highlightColor="#444">
        <ThemeProvider theme={theme}>
          <RouterProvider router={rootRouter} />
        </ThemeProvider>
      </SkeletonTheme>
    </Provider>
  </React.StrictMode>
);
