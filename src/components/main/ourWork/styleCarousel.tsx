import styled, { keyframes } from "styled-components";

const infinityCarousel = keyframes`
  100%{
    transform: translateX(calc(-250px *9));
  }
`;

export const $Wrapper = styled.div`
  height: 250px;
  margin: auto;
  width: 100%;
`;

export const $CarouselWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: calc(250px * 18);
  animation: ${infinityCarousel} 20s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

export const $Item = styled.div<{ bg: string }>`
  height: 220px;
  width: 360px;
  display: flex;
  align-items: center;
  padding: 15px;
  perspective: 100px;
  background-color: ${({ bg }) => bg};
`;
