import { useState, useEffect } from "react";
import HeaderNav from "@Components/header/HeaderNav";
import Footer from "@Components/footer/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet, useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";
import useScroll from "@Hooks/useScroll";
import { useRecoilState } from "recoil";
import { HeaderState } from "@Recoil/atom";

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
      <RecoilRoot>
        <GlobalStyle />
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
      </RecoilRoot>
    </>
  );
}

export default App;
