import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import { AiOutlineClose } from "react-icons/ai";
import { CgCloseO } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { $Wrapper, $Header, $Logo, $Toggle } from "./style";
import logoW from "../../../assets/image/logo/KR_가로형_화이트.png";
import logoP from "../../../assets/image/logo/KR_가로형_2색.png";
// import { IoListCircle } from "react-icons/io";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleClick = () => setOpenNav((prev) => !prev);

  return (
    <$Wrapper>
      <$Header>
        <Link to="/">
          <$Logo>
            <img src={openNav ? logoP : logoW} alt="로고" />
          </$Logo>
        </Link>
        <$Toggle openNav={openNav} onClick={handleClick}>
          {openNav ? <CgCloseO /> : <TiThMenu />}
        </$Toggle>
      </$Header>
      {openNav && <Navigation setOpenNav={setOpenNav} />}
    </$Wrapper>
  );
};

export default Header;
