import {
  $Wrapper,
  $PositionWrapper,
  $ImgBox,
  $ContentWrapper,
  $Title,
  $BtnWrapper,
} from "./style";
import img from "@Assets/image/ourSolution/LAMP.png";
import Button from "@Components/Button/Button";
import { useNavigate } from "react-router-dom";
import { ourSolutionData } from "@Data/mainContentData";
import MainDescrip from "../mainDescrip/MainDescrip";
import { scale } from "@Components/animation/framerMotion";

const OurSolutions = () => {
  const navigate = useNavigate();

  return (
    <$Wrapper>
      <$PositionWrapper>
        <$ImgBox variants={scale} initial="hidden" whileInView="visible">
          <img src={img} alt="전구 이미지" />
        </$ImgBox>
        <$ContentWrapper>
          <$Title>공간의파티의 솔루션</$Title>
          {ourSolutionData.map((list) => (
            <MainDescrip key={list.id} sentence={list.sentence} main={true} />
          ))}
          <$BtnWrapper>
            <Button
              text={"더보기"}
              color={"#fff"}
              bgColor={"purple"}
              handleClick={() => navigate("/works")}
            />
          </$BtnWrapper>
        </$ContentWrapper>
      </$PositionWrapper>
    </$Wrapper>
  );
};

export default OurSolutions;
