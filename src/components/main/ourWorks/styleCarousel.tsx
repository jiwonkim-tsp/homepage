import styled, { keyframes } from "styled-components";

const infinite = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-35vw * 12));
  }
`;

const infiniteMobile = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-45vw * 12));
  }
`;

export const $Wrapper = styled.div`
  position: relative;
  width: 100%;
  @media (max-width: 480px) {
    top: 10vw;
  }
`;

export const $CarouselWrapper = styled.ul`
  width: calc(35vw * 24);
  display: flex;
  animation: ${infinite} 100s linear infinite;
  @media (max-width: 480px) {
    width: calc(45vw * 24);
    display: flex;
    animation: ${infiniteMobile} 100s linear infinite;
  }
`;

export const $Item = styled.li`
  width: 35vw;
  img {
    width: 32vw;
  }
  @media (max-width: 480px) {
    width: 45vw;
    img {
      width: 42vw;
    }
  }
`;
