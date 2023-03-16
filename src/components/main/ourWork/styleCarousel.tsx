import styled, { keyframes } from "styled-components";
import Slider from "react-slick";

export const $Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const $CarouselWrapper = styled(Slider)`
  transition-timing-function: linear;
  -webkit-transition-timing-function: linear !important;
  -o-transition-timing-function: linear !important;
  transition-timing-function: linear !important;
`;

export const $Item = styled.div`
  width: 30vw;
  img {
    width: 30vw;
  }
`;
