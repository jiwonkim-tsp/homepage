import {
  $Wrapper,
  $ImgBox,
  $ContentWrapper,
  $Title,
  $BtnWrapper,
} from "./style";
import img from "@Assets/image/ourSolution/main.png";
import Button from "@Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { ourSolutionData } from "@Data/mainContentData";
import MainDescrip from "../mainDescrip/MainDescrip";
import { moveLeft } from "@Animation/framerMotion";

const OurSolutions = () => {
  const navigate = useNavigate();

  return (
    <$Wrapper>
      <$ImgBox variants={moveLeft} initial="hidden" whileInView="visible">
        <a href="https://youtu.be/i4eMTrLnEIw" target="_blank">
          <img src={img} alt="솔루션 이미지" />
        </a>
      </$ImgBox>
      <$ContentWrapper>
        <$Title>Solutions</$Title>
        {ourSolutionData.map((list) => (
          <MainDescrip key={list.id} sentence={list.sentence} main={true} />
        ))}
        <$BtnWrapper>
          <Button
            text={"더보기"}
            color={"#fff"}
            bgColor={"purple"}
            handleClick={() => navigate("/solutions")}
          />
        </$BtnWrapper>
      </$ContentWrapper>
    </$Wrapper>
  );
};

export default OurSolutions;
