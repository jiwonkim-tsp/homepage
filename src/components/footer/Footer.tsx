import {
  $Wrapper,
  $ContentWrapper,
  $Contact,
  $ContactTitle,
  $ContactUl,
  $ContactLi,
  $CompanyInfo,
  $Rights,
  $SnsBox,
  $SnsList,
} from "./style";
import { Link } from "react-router-dom";
import img from "@Assets/image/footer/pose1.png";
// import video from "@Assets/image/catchphrase/tsp xr.mp4";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { useState, useRef } from "react";
import EmailModal from "./EmailModal";

const contactInfo = [
  {
    id: "instagram",
    icon: <BsInstagram />,
    url: "https://www.instagram.com/tsp_xr/",
  },
  {
    id: "youtube",
    icon: <BsYoutube />,
    url: "https://www.youtube.com/@tspxr",
  },
];

interface IFooterProps {
  page: string;
}

const Footer = ({ page }: IFooterProps) => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("info@tsp-xr.com");
  const inputRef = useRef<HTMLInputElement>(null);

  const copyEmail = () => {
    setShowModal(true);
    if (inputRef.current !== null) {
      inputRef.current.focus();
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <$Wrapper page={page}>
      <$ContentWrapper>
        {showModal && <EmailModal showModal={showModal} />}
        <$Contact>
          <$ContactTitle>Contact</$ContactTitle>
          <input
            ref={inputRef}
            type="text"
            value={text}
            inputMode="none"
          ></input>
          <$ContactUl>
            <$ContactLi>
              <a href="tel:02-545-3982">02-545-3982</a>
            </$ContactLi>
            <$ContactLi
              onClick={() => {
                copyEmail();
              }}
            >
              info@tsp-xr.com
            </$ContactLi>
            <$ContactLi>
              <a href="https://goo.gl/maps/o46jRX5ytXJEuHo56" target="_blank">
                서울 강남구 학동로 101길 26
              </a>
            </$ContactLi>
          </$ContactUl>
        </$Contact>
        <$SnsBox>
          {contactInfo.map((item) => (
            <$SnsList key={item.id}>
              <Link to={item.url}>{item.icon}</Link>
            </$SnsList>
          ))}
        </$SnsBox>
        <$CompanyInfo>
          <$Rights>
            <span>&copy; </span> 공간의파티. All Rights Reserved.
          </$Rights>
        </$CompanyInfo>
      </$ContentWrapper>
    </$Wrapper>
  );
};

export default Footer;
