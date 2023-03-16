import styled from "styled-components";
import Header from "./header/Header";
import Navigation from "./navigation/Navigation";
import { useRecoilValue } from "recoil";
import { ToggleState } from "../../recoil/atom";

const HeaderNav = () => {
  const toggleState = useRecoilValue(ToggleState);
  return (
    <$Wrapper>
      <Header />
      {toggleState ? <Navigation /> : ""}
    </$Wrapper>
  );
};

export default HeaderNav;

const $Wrapper = styled.div`
  width: 500px;
`;
