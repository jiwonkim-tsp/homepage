import HeaderNav from "@Components/header/HeaderNav";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ScrollTop from "@Hooks/ScrollTop";

function App() {
  return (
    <>
      <RecoilRoot>
        <ScrollTop />
        <GlobalStyle />
        <HeaderNav />
        <Outlet />
      </RecoilRoot>
    </>
  );
}

export default App;
