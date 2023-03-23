import {
  $Wrapper,
  $ImgBox,
  $ContentWrapper,
  $LogoWrapper,
  $DescripWrapper,
} from "./style";
import img from "@Assets/image/ourTeam/pose7.png";
import logo from "@Assets/image/logo/ourTeamLogo.png";
import OurWork from "../ourWork/OurWork";
import { ourTeamData } from "@Data/mainContentData";
import MainDescrip from "../mainDescrip/MainDescrip";

const OurTeam = () => {
  return (
    <$Wrapper>
      <$ImgBox
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: -50 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img src={img} alt="오리너구리 이미지" />
      </$ImgBox>
      <$ContentWrapper>
        <$LogoWrapper>
          <img src={logo} alt="로고 이미지" />
        </$LogoWrapper>
        <$DescripWrapper>
          {ourTeamData.map((list) => (
            <MainDescrip key={list.id} sentence={list.sentence} />
          ))}
        </$DescripWrapper>
      </$ContentWrapper>
      <OurWork />
    </$Wrapper>
  );
};

export default OurTeam;
