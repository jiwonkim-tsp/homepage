import { $Wrapper, $ContentWrapper, $ImgBox } from "./style";
import img from "./../../../assets/image/ourTeam/pose7.png";
import MainContent from "./../mainContent/MainContent";
import OurWork from "../ourWork/OurWork";

const OurTeam = () => {
  return (
    <$Wrapper>
      <$ImgBox
        initial={{ opacity: 0, x: 0 }}
        whileInView={{ opacity: 1, x: -100 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img src={img} alt="오리너구리 이미지" />
      </$ImgBox>
      <$ContentWrapper>
        <MainContent />
      </$ContentWrapper>
      <OurWork />
    </$Wrapper>
  );
};

export default OurTeam;
