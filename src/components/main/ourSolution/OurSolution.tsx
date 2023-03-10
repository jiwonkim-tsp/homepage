import {
  $Wrapper,
  $PositionWrapper,
  $ImgBtnWrapper,
  $ImgBox,
  $ContentWrapper,
  $Heading,
  $Content,
  $Sentence,
  $ColoredText,
} from "./style";
import img from "./../../../assets/image/ourSolution/LAMP.png";
import Button from "./../../Button/Button";

const OurSolution = () => {
  return (
    <$Wrapper>
      <$PositionWrapper>
        <$ImgBtnWrapper>
          <$ImgBox>
            <img src={img} alt="전구 이미지" />
          </$ImgBox>
          <Button
            text={"Discover more of our work"}
            color={"#fff"}
            bgColor={"purple"}
          />
        </$ImgBtnWrapper>
        <$ContentWrapper>
          <$Heading>our solutions</$Heading>
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
      </$PositionWrapper>
    </$Wrapper>
  );
};

export default OurSolution;
