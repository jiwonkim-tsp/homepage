import { useNavigate } from "react-router-dom";
import { $Wrapper, $Header, $Logo, $BtnWrapper, $ToggleBtn } from "./style";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "@Assets/image/logo/mainLogo.png";
import { useRecoilValue, useRecoilState } from "recoil";
import { ToggleState } from "@Recoil/atom";

interface IHeaderProps {
  shown: boolean;
}

const Header = ({ shown }: IHeaderProps) => {
  const toggleState = useRecoilValue(ToggleState);
  const [toggle, setToggle] = useRecoilState(ToggleState);
  const navigate = useNavigate();

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleClick = () => {
    setToggle(false);
    navigate("/");
  };

  console.log(shown);
  return (
    <$Wrapper shown={shown}>
      <$Header shown={shown} openNav={toggleState}>
        <$Logo onClick={handleClick}>
          <img src={logo} alt="로고" />
        </$Logo>
        <$BtnWrapper>
          <$ToggleBtn openNav={toggleState} onClick={handleToggle}>
            {toggleState ? <IoMdClose /> : <HiMenu />}
          </$ToggleBtn>
        </$BtnWrapper>
      </$Header>
    </$Wrapper>
  );
};

export default Header;
