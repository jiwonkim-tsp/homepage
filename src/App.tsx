import HeaderNav from "./components/header/HeaderNav";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import ScrollTop from "./../src/hooks/ScrollTop";

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
