import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Farm from "../pages/Farm";
import FarmDetail from "../pages/FarmDetail";
import ErrorPage from "../pages/error-page";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/farm",
        element: <Farm />,
      },
      {
        path: "/farm/:farm_id",
        element: <FarmDetail />,
      },
    ],
  },
]);

export default rootRouter;
