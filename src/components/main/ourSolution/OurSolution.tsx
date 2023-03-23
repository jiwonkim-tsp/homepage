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

const OurSolution = () => {
  const navigate = useNavigate();

  return (
    <$Wrapper>
      <$PositionWrapper>
        <$ImgBox
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img src={img} alt="전구 이미지" />
        </$ImgBox>
        <$ContentWrapper>
          <$Title>공간의파티의 솔루션</$Title>
          {ourSolutionData.map((list) => (
            <MainDescrip key={list.id} sentence={list.sentence} />
          ))}
          <$BtnWrapper>
            <Button
              text={"Discover more of our work"}
              color={"#fff"}
              bgColor={"purple"}
              handleClick={() => navigate("./solution")}
            />
          </$BtnWrapper>
        </$ContentWrapper>
      </$PositionWrapper>
    </$Wrapper>
  );
};

export default OurSolution;
