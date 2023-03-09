import Carousel from "./Carousel";
import styled from "styled-components";

const OurWork = () => {
  return (
    <$Wrapper>
      <Carousel />
    </$Wrapper>
  );
};

export default OurWork;

const $Wrapper = styled.div`
  height: 100vh;
`;
