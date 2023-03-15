import HeaderNav from "./components/header/HeaderNav";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
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
