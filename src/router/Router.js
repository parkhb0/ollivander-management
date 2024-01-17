import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Farm from "../pages/Farm";
import FarmDetail from "../pages/FarmDetail";
import FarmAdd from "../pages/FarmAdd";
import ProductAdd from "../pages/product/ProductAdd";
import ErrorPage from "../pages/error-page";
import ProductPriceHistory from "../pages/product/ProductPriceHistory";
import Login from "../pages/Login";
import ProtectedRoutes from "../pages/auth/ProtectedRoutes";

const rootRouter = createBrowserRouter([
  {
    index: true,
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    element: <ProtectedRoutes />,
    children: [
      // {
      //   index: true,
      //   path: "/",
      //   element: <Home />,
      // },
      {
        path: "/farm",
        element: <Home />,
      },
      {
        path: "/farm/:farm_id",
        element: <FarmDetail />,
        children: [
          {
            index: true,
            path: "/farm/:farm_id/product_add",
            element: <ProductAdd />,
          },
          {
            path: "/farm/:farm_id/product_price",
            element: <ProductPriceHistory />,
          },
        ],
      },
      {
        path: "/add",
        element: <FarmAdd />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default rootRouter;
