import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Farm from "../pages/Farm";
import FarmDetail from "../pages/FarmDetail";
import FarmAdd from "../pages/FarmAdd";
import ProductAdd from "../pages/product/ProductAdd";
import ErrorPage from "../pages/error-page";
import ProductPriceHistory from "../pages/product/ProductPriceHistory";

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
]);

export default rootRouter;
