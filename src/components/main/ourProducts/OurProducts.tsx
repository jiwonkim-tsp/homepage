import {
  $Wrapper,
  $BtnWrapper,
  $ImgBox,
  $ContentWrapper,
  $Title,
} from "./style";
import img from "@Assets/image/ourProjects/product_sensor_alpha.png";
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
        <$Title>공간의파티의 제품들</$Title>
        {ourProductData.map((list) => (
          <MainDescrip key={list.id} sentence={list.sentence} />
        ))}
        <$BtnWrapper>
          <Button
            text={"Discover more of our work"}
            color={"#fff"}
            bgColor={"purple"}
            handleClick={() => navigate("/company")}
          />
        </$BtnWrapper>
      </$ContentWrapper>
    </$Wrapper>
  );
};

export default OurProducts;
