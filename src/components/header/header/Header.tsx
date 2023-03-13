import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import { CgCloseO } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { $Header, $Logo, $Toggle } from "./style";
import logoW from "../../../assets/image/logo/KR_가로형_화이트.png";
import logoP from "../../../assets/image/logo/KR_가로형_2색.png";

interface IHeaderProps {
  toggle: () => void;
}

const Header = ({ toggle }: IHeaderProps) => {
  const [openNav, setOpenNav] = useState(false);
  console.log(toggle);

  const handleClick = () => toggle;

  return (
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
  );
};

export default Header;
