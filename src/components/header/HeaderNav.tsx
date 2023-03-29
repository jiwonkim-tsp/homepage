import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import { useRecoilValue } from "recoil";
import { ToggleState } from "@Recoil/atom";

interface IHeaderProps {
  header: boolean;
}
const HeaderNav = ({ header }: IHeaderProps) => {
  const toggleState = useRecoilValue(ToggleState);
  return (
    <>
      <Header shown={header} />
      {toggleState ? <Navigation /> : ""}
    </>
  );
};

export default HeaderNav;
