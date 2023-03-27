import {
  $Wrapper,
  $BtnWrapper,
  $ImgBox,
  $ContentWrapper,
  $Title,
} from "./style";
import img from "@Assets/image/ourProducts/productSensor.png";
import Button from "@Components/Button/Button";
import { useNavigate } from "react-router-dom";
import MainDescrip from "../mainDescrip/MainDescrip";
import { ourProductData } from "@Data/mainContentData";

const OurProducts = () => {
  const navigate = useNavigate();

  return (
    <$Wrapper>
      <$ImgBox
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <img src={img} alt="제품 이미지" />
      </$ImgBox>
      <$ContentWrapper>
        <$Title>products</$Title>
        {ourProductData.map((list) => (
          <MainDescrip key={list.id} sentence={list.sentence} main={true} />
        ))}
      </$ContentWrapper>
      <$BtnWrapper>
        <Button
          text={"더보기"}
          color={"#fff"}
          bgColor={"purple"}
          handleClick={() => navigate("/products")}
        />
      </$BtnWrapper>
    </$Wrapper>
  );
};

export default OurProducts;
