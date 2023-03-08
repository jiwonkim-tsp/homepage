import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/home/Home";
import Awards from "./pages/awards/Awards";
import OurWork from "./pages/ourWork/OurWork";
import AiSolution from "./pages/aiSolution/AiSolution";
import Products from "./pages/products/Products";
import ProductDetail from "./pages/productDetail/ProductDetail";

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
        path: "awards",
        element: <Awards />,
      },
      {
        path: "ourwork",
        element: <OurWork />,
      },
      {
        path: "aisolution",
        element: <AiSolution />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
