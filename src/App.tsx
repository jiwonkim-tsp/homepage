import HeaderNav from "@Components/header/HeaderNav";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import useScroll from "@Hooks/useScroll";

function App() {
  const { scrollTop } = useScroll();
  scrollTop();
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <HeaderNav />
        <Outlet />
      </RecoilRoot>
    </>
  );
}

export default App;
