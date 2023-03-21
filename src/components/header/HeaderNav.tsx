import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import { useRecoilValue } from "recoil";
import { ToggleState } from "@Recoil/atom";

const HeaderNav = () => {
  const toggleState = useRecoilValue(ToggleState);
  return (
    <>
      <Header />
      {toggleState ? <Navigation /> : ""}
    </>
  );
};

export default HeaderNav;
