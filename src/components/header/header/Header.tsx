import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TiThMenu, TiThMenuOutline } from "react-icons/ti";
import { $Wrapper, $Header, $Logo, $Toggle } from "./style";
import logo from "../../../assets/image/logo/KR_가로형_화이트.png";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => setOpenNav((prev) => !prev);

  return (
    <$Wrapper>
      <$Header>
        <Link to="/">
          <$Logo>
            <img src={logo} alt="로고" />
          </$Logo>
        </Link>
        <$Toggle onClick={handleClick}>
          {openNav ? <AiOutlineClose /> : <TiThMenu />}
        </$Toggle>
      </$Header>
      {openNav && <Navigation setOpenNav={setOpenNav} />}
    </$Wrapper>
  );
};

export default Header;
