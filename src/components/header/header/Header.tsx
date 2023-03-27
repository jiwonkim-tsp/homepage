import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "@Components/Button/Button";
import { $Wrapper, $Header, $Logo, $BtnWrapper, $ToggleBtn } from "./style";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "@Assets/image/logo/mainLogo.png";
import { useRecoilValue, useRecoilState } from "recoil";
import { ToggleState } from "@Recoil/atom";
import { useScroll } from "framer-motion";

const Header = () => {
  const toggleState = useRecoilValue(ToggleState);
  const [toggle, setToggle] = useRecoilState(ToggleState);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  console.log(scrollYProgress);
  // const hideHeader: boolean = scrollYProgress > 0 ? true : false;

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <$Wrapper>
      <$Header openNav={toggleState}>
        <Link to="/">
          <$Logo>
            <img src={logo} alt="로고" />
          </$Logo>
        </Link>
        <$BtnWrapper>
          {toggleState ? (
            ""
          ) : (
            <Button
              text={"history"}
              color={"#fff"}
              bgColor={""}
              border={"purple"}
              handleClick={() => navigate("/company")}
              padding={"2vw 5.5vw"}
            />
          )}
          <$ToggleBtn openNav={toggleState} onClick={handleToggle}>
            {toggleState ? <IoMdClose /> : <HiMenu />}
          </$ToggleBtn>
        </$BtnWrapper>
      </$Header>
    </$Wrapper>
  );
};

export default Header;
