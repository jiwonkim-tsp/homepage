import {
  $Wrapper,
  $Content,
  $Word,
  $ImgBox,
  $Contact,
  $List,
  $Label,
  $CompanyInfo,
  $LogoBox,
  $SnsBox,
  $SnsList,
} from "./style";
import { Link } from "react-router-dom";
import img from "@Assets/image/footer/pose1.png";
import logo from "@Assets/image/logo/KR_문자형_화이트.png";
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
  return (
    <$Wrapper page={page}>
      {page === "products" || page === "solutions" ? (
        <>
          <$Contact
            className="gform"
            method="post"
            action="https://script.google.com/macros/s/AKfycbzZUoW1c8N9Iu62uvz-u6TYVB5UJClJF7eGgwv36eL46hHKONbOFgcCleo2irNdD4Q/exec"
            target="frAttachFiles"
          >
            <$List>
              <$Label htmlFor="name">이름</$Label>
              <input type="text" name="name" required />
            </$List>
            <$List>
              <$Label htmlFor="email">이메일</$Label>
              <input type="email" name="email" required />
            </$List>
            <$List>
              <$Label htmlFor="tel">연락처</$Label>
              <input type="tel" name="tel" required />
            </$List>
            <button type="submit">문의하기</button>
          </$Contact>
          <iframe name="frAttachFiles" />
        </>
      ) : (
        <>
          <$Content>
            <$Word>Let's make</$Word>
            <$Word>something</$Word>
            <$Word>new</$Word>
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
          <img src={logo} alt="공간의 파티 로고 이미지" />
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
