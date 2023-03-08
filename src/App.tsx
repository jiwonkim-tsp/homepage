import Header from "./components/header/header/Header";
import GlobalStyle from "./styles/GlobalStyle";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
