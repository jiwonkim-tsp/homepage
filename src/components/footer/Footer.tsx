import {
  $Wrapper,
  $PositionWrapper,
  $Content,
  $Word,
  $ImgBox,
  $BtnWrapper,
  $CompanyInfo,
  $LogoBox,
  $SnsBox,
  $SnsList,
} from "./style";
import { Link } from "react-router-dom";
import img from "./../../assets/image/footer/pose1.png";
import Button from "./../Button/Button";
import logo from "./../../assets/image/logo/KR_문자형_화이트.png";
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";

const contactInfo = [
  {
    id: "instagram",
    icon: <FaInstagramSquare />,
    url: "https://www.instagram.com/tsp_xr/",
  },
  {
    id: "youtube",
    icon: <FaYoutube />,
    url: "https://www.youtube.com/@tspxr8611",
  },
];

const Footer = () => {
  return (
    <$Wrapper>
      <$PositionWrapper>
        <$Content>
          <$BtnWrapper>
            <Button text={"Get in touch"} color={""} bgColor={"green"} />
          </$BtnWrapper>
          <$Word>Let's make</$Word>
          <$Word>new</$Word>
          <$Word>something</$Word>
        </$Content>
        <$ImgBox
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 3, ease: "easeOut" }}
        >
          <img src={img} alt="오리너구리 이미지" />
        </$ImgBox>
        <$CompanyInfo>
          <$LogoBox>
            <img src={logo} alt="공간의 파티 로고 이미지" />
          </$LogoBox>
          <$SnsBox>
            {contactInfo.map((item) => (
              <Link to={item.url} key={item.id}>
                <$SnsList>{item.icon}</$SnsList>
              </Link>
            ))}
          </$SnsBox>
        </$CompanyInfo>
      </$PositionWrapper>
    </$Wrapper>
  );
};

export default Footer;
