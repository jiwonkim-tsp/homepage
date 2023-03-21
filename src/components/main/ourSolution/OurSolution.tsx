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
import img from "@Assets/image/ourSolution/LAMP.png";
import Button from "@Components/Button/Button";
import { useNavigate } from "react-router-dom";

const OurSolution = () => {
  const navigate = useNavigate();

  return (
    <$Wrapper>
      <$PositionWrapper>
        <$ImgBtnWrapper>
          <$ImgBox
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img src={img} alt="전구 이미지" />
          </$ImgBox>
          <Button
            text={"Discover more of our work"}
            color={"#fff"}
            bgColor={"purple"}
            handleClick={() => navigate("./solution")}
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
