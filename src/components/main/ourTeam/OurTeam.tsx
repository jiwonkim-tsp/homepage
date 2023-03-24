import {
  $Wrapper,
  $ImgBox,
  $ContentWrapper,
  $LogoWrapper,
  $DescripWrapper,
} from "./style";
import img from "@Assets/image/ourTeam/pose7.png";
import logo from "@Assets/image/logo/ourTeamLogo.png";
import OurWorks from "../ourWorks/OurWorks";
import { ourTeamData } from "@Data/mainContentData";
import MainDescrip from "../mainDescrip/MainDescrip";
import { moveLeft } from "@Components/animation/framerMotion";

const OurTeam = () => {
  return (
    <$Wrapper>
      <$ImgBox variants={moveLeft} initial="hidden" whileInView="visible">
        <img src={img} alt="오리너구리 이미지" />
      </$ImgBox>
      <$ContentWrapper>
        <$LogoWrapper>
          <img src={logo} alt="로고 이미지" />
        </$LogoWrapper>
        <$DescripWrapper>
          {ourTeamData.map((list) => (
            <MainDescrip key={list.id} sentence={list.sentence} main={true} />
          ))}
        </$DescripWrapper>
      </$ContentWrapper>
      <OurWorks />
    </$Wrapper>
  );
};

export default OurTeam;
