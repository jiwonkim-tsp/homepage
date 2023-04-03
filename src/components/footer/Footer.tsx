import {
  $Wrapper,
  $Contact,
  $ContactTitle,
  $ContactUl,
  $ContactLi,
  $Content,
  $Word,
  $ImgBox,
  $CompanyInfo,
  $LogoBox,
  $SnsBox,
  $SnsList,
} from "./style";
import { Link } from "react-router-dom";
import img from "@Assets/image/footer/pose1.png";
import logo from "@Assets/image/logo/footerLogo.png";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const contactInfo = [
  {
    id: "instagram",
    icon: <BsInstagram />,
    url: "https://www.instagram.com/tsp_xr/",
  },
  {
    id: "youtube",
    icon: <BsYoutube />,
    url: "https://www.youtube.com/@tspxr8611",
  },
];

interface IFooterProps {
  page: string;
}

const Footer = ({ page }: IFooterProps) => {
  const copyEmail = () => {
    document.execCommand("info@tsp-xr.com");
  };

  return (
    <$Wrapper page={page}>
      {page === "products" || page === "solutions" ? (
        <$Contact>
          <$ContactTitle>Contact</$ContactTitle>
          <$ContactUl>
            <$ContactLi>
              <a href="tel:02-545-3982">02-545-3982</a>
            </$ContactLi>
            <$ContactLi onClick={copyEmail}>info@tsp-xr.com</$ContactLi>
            <$ContactLi>
              <a href="https://goo.gl/maps/o46jRX5ytXJEuHo56" target="_blank">
                서울 강남구 학동로 101길 26
              </a>
            </$ContactLi>
          </$ContactUl>
        </$Contact>
      ) : (
        <>
          <$Content>
            <$Word>We're putting</$Word>
            <$Word>the power of AR</$Word>
            <$Word>in your palm</$Word>
          </$Content>
          {page === "main" ? (
            <$ImgBox
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, ease: "easeOut" }}
            >
              <img src={img} alt="오리너구리 이미지" />
            </$ImgBox>
          ) : (
            ""
          )}
        </>
      )}
      <$CompanyInfo>
        <$LogoBox>
          <span>&copy; </span> 공간의파티 All rights reserved.
        </$LogoBox>
      </$CompanyInfo>
      <$SnsBox>
        {contactInfo.map((item) => (
          <$SnsList key={item.id}>
            <Link to={item.url}>{item.icon}</Link>
          </$SnsList>
        ))}
      </$SnsBox>
    </$Wrapper>
  );
};

export default Footer;
