import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "@Pages/home/Home";
import Company from "@Pages/company/Company";
import Works from "@Pages/works/Works";
import Solutions from "@Pages/solutions/Solutions";
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
        path: "works",
        element: <Works />,
      },
      {
        path: "solutions",
        element: <Solutions />,
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
