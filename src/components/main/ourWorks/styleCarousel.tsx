import styled, { keyframes } from "styled-components";

const infinite = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-35vw * 12));
  }
`;

export const $Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const $CarouselWrapper = styled.ul`
  width: calc(35vw * 24);
  display: flex;
  animation: ${infinite} 100s linear infinite;
  @media (max-width: 480px) {
    width: calc(35vw * 24);
    display: flex;
    animation: ${infinite} 100s linear infinite;
  }
`;

export const $Item = styled.li`
  width: 35vw;
  img {
    width: 32vw;
  }
`;
