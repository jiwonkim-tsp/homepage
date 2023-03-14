import styled, { keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

const dataLength = 10;

const infinityCarousel = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(calc(-25vw * ${dataLength * 0.5}))}
`;

export const $Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  /* transition-timing-function: linear; */
`;

export const $CarouselWrapper = styled(Swiper)`
  /* display: flex;
  gap: 3vw; */
  /* width: calc(25vw * ${dataLength});
  height: 100%;
  /* animation: ${infinityCarousel} 5s linear infinite; */
  &:hover {
    animation-play-state: paused;
  } */
  /* transition-timing-function : linear; */
  -webkit-transition-timing-function:linear!important;
  -o-transition-timing-function:linear!important;
  transition-timing-function:linear!important;
`;

export const $Item = styled(SwiperSlide)`
  width: 50vw;
  img {
    width: 10vw;
    transition: 0.3 ease all;
  }
  border: none;
  /* transition-timing-function: linear; */
`;
