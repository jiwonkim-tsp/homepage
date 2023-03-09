import styled, { keyframes } from "styled-components";

const infinityCarousel = keyframes`
  0% { transform: translateX(0); }
	100% { transform: translateX(calc(-250px * 5))}
`;

export const $Wrapper = styled.div`
  height: 250px;
  margin: auto;
`;

export const $CarouselWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: calc(250px * 5);
  animation: ${infinityCarousel} 5s linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

export const $Item = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  align-items: center;
  padding: 15px;
`;
