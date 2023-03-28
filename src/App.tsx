import HeaderNav from "@Components/header/HeaderNav";
import Footer from "@Components/footer/Footer";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet, useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";
import useScroll from "@Hooks/useScroll";

function App() {
  const { scrollTop } = useScroll();
  const { pathname } = useLocation();
  scrollTop();
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <HeaderNav />
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
