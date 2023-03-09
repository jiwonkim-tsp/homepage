import Carousel from "./Carousel";
import styled from "styled-components";

const OurWork = () => {
  return (
    <$Wrapper>
      <$Title>Our work</$Title>
      <$CarouselWrapper>
        <Carousel />
      </$CarouselWrapper>
    </$Wrapper>
  );
};

export default OurWork;

const height = window.innerHeight;

const $Wrapper = styled.div`
  height: ${height}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const $CarouselWrapper = styled.div``;

const $Title = styled.h1`
  font-weight: bolder;
  font-size: 60px;
  color: #fff;
`;
