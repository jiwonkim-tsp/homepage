import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Company from "./pages/company/Company";
import Work from "./pages/work/Work";
import Solution from "./pages/solution/Solution";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";
import News from "./pages/news/News";

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
