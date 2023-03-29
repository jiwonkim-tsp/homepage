import { useState, useEffect } from "react";
import HeaderNav from "@Components/header/HeaderNav";
import Footer from "@Components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import useScroll from "@Hooks/useScroll";

function App() {
  const { scrollTop } = useScroll();
  const { pathname } = useLocation();
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.pageYOffset;
      if (scrollY > 50) {
        setHideHeader(true);
      } else if (scrollY < 200) {
        setHideHeader(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
