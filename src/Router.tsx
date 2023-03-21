import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@Pages/home/Home";
import Company from "@Pages/company/Company";
import Work from "@Pages/work/Work";
import Solution from "@Pages/solution/Solution";
import Products from "@Pages/products/Products";
import ProductDetail from "@Pages/productDetail/ProductDetail";
import News from "@Pages/news/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "company",
        element: <Company />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "solution",
        element: <Solution />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "news",
        element: <News />,
      },
    ],
  },
]);

export default router;
