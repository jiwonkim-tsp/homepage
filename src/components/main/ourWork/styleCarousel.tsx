import styled, { keyframes } from "styled-components";

const dataLength = 10;

const infinityCarousel = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(calc(-25vw * ${dataLength * 0.5}))}
`;

export const $Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const $CarouselWrapper = styled.div`
  display: flex;
  gap: 3vw;
  width: calc(25vw * ${dataLength});
  height: 100%;
  animation: ${infinityCarousel} 5s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

export const $Item = styled.div`
  width: 25vw;
  img {
    width: 25vw;
  }
`;
