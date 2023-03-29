import { useState, useEffect } from "react";
import HeaderNav from "@Components/header/HeaderNav";
import Footer from "@Components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import useScroll from "@Hooks/useScroll";

function App() {
  const { scrollTop } = useScroll();
  const { pathname } = useLocation();
  const [hideHeader, setHideHeader] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    (() => {
      window.addEventListener("scroll", () => setScrollY(window.pageYOffset));
      if (scrollY > 50) {
        setHideHeader(true);
      }
    })();
    return () => {
      window.removeEventListener("scroll", () =>
        setScrollY(window.pageYOffset)
      );
    };
  });

  scrollTop();
  return (
    <>
      <HeaderNav header={hideHeader} />
      <Outlet />
      <Footer
        page={
          pathname === "/solutions"
            ? "solutions"
            : pathname === "/products"
            ? "products"
            : pathname === "/works"
            ? "works"
            : pathname === "/news"
            ? "news"
            : pathname === "/company"
            ? "company"
            : "main"
        }
      />
    </>
  );
}

export default App;
