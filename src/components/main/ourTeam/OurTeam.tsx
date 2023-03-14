import {
  $Wrapper,
  $ImgBox,
  $ContentWrapper,
  $Heading,
  $Content,
  $Sentence,
  $ColoredText,
} from "./style";
import img from "./../../../assets/image/ourTeam/pose7.png";
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
        <$Heading>our team is</$Heading>
        <$Content>
          <$Sentence>Enjoy some of our best work</$Sentence>
          <$Sentence>
            in immersive<$ColoredText color={"purple"}>web</$ColoredText>
          </$Sentence>
          <$Sentence>
            <$ColoredText color={"green"}>augmented reality</$ColoredText>and
          </$Sentence>
          <$Sentence>
            <$ColoredText color={"yellow"}>new experiences</$ColoredText>
          </$Sentence>
        </$Content>
      </$ContentWrapper>
      <OurWork />
    </$Wrapper>
  );
};

export default OurTeam;
