import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./../../Button/Button";
import Navigation from "../navigation/Navigation";
import { $Wrapper, $Header, $Logo, $BtnWrapper, $ToggleBtn } from "./style";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logoP from "../../../assets/image/logo/KR_가로형_2색.png";
import { useRecoilValue, useRecoilState } from "recoil";
import { ToggleState } from "./../../../recoil/atom";

const Header = () => {
  const toggleState = useRecoilValue(ToggleState);
  const [toggle, setToggle] = useRecoilState(ToggleState);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <$Wrapper>
      <$Header openNav={toggleState}>
        <Link to="/">
          <$Logo>
            <img src={logoP} alt="로고" />
          </$Logo>
        </Link>
        <$BtnWrapper>
          {toggleState ? (
            ""
          ) : (
            <Button
              text={"Our history"}
              color={"#fff"}
              bgColor={""}
              border={"purple"}
            />
          )}
          <$ToggleBtn openNav={toggleState} onClick={handleClick}>
            {toggleState ? <IoMdClose /> : <HiMenu />}
          </$ToggleBtn>
        </$BtnWrapper>
      </$Header>
    </$Wrapper>
  );
};

export default Header;
