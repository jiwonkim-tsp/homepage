import { $Wrapper, $PositionWrapper, $ImgBtnWrapper, $ImgBox } from "./style";
import img from "./../../../assets/image/ourSolution/LAMP.png";
import Button from "./../../Button/Button";
import MainContent from "../mainContent/mainContent";

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
        <MainContent solution={true} />
      </$PositionWrapper>
    </$Wrapper>
  );
};

export default OurSolution;
