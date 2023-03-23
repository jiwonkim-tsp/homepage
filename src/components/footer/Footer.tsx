import {
  $Wrapper,
  $PositionWrapper,
  $Content,
  $Word,
  $ImgBox,
  $Contact,
  $List,
  $Label,
  $BtnWrapper,
  $CompanyInfo,
  $LogoBox,
  $SnsBox,
  $SnsList,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import img from "@Assets/image/footer/pose1.png";
import Button from "@Components/Button/Button";
import logo from "@Assets/image/logo/KR_문자형_화이트.png";
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

interface IFooterProps {
  main: boolean;
}

const Footer = ({ main }: IFooterProps) => {
  const navigate = useNavigate();

  return (
    <$Wrapper>
      <$PositionWrapper main={main}>
        {main ? (
          <>
            <$Content>
              <$Word>Let's make</$Word>
              <$Word>something</$Word>
              <$Word>new</$Word>
            </$Content>
            <$ImgBox
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <img src={img} alt="오리너구리 이미지" />
            </$ImgBox>
          </>
        ) : (
          <>
            <$Contact
              className="gform"
              method="post"
              action="https://script.google.com/macros/s/AKfycbzZUoW1c8N9Iu62uvz-u6TYVB5UJClJF7eGgwv36eL46hHKONbOFgcCleo2irNdD4Q/exec"
              target="frAttachFiles"
            >
              <$List>
                <$Label htmlFor="name">name</$Label>
                <input type="text" name="name" required />
              </$List>
              <$List>
                <$Label htmlFor="email">email</$Label>
                <input type="email" name="email" required />
              </$List>
              <$List>
                <$Label htmlFor="tel">phone number</$Label>
                <input type="tel" name="tel" required />
              </$List>
              <button type="submit">Send</button>
            </$Contact>
            <iframe name="frAttachFiles" />
          </>
        )}
        {main ? (
          <$BtnWrapper>
            <Button
              text={"Get in touch"}
              color={""}
              bgColor={"green"}
              handleClick={() => navigate("/solution")}
            />
          </$BtnWrapper>
        ) : (
          ""
        )}
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
