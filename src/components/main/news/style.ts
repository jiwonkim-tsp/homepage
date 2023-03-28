import styled, { keyframes } from "styled-components";
import colors from "@Constants/color";

const infinite = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-35vw * 3));
  }
`;

const infiniteMobile = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(calc(-60vw * 3));
}
`;

export const $Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 30vw;
  display: flex;
  gap: 5vw;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  @media (max-width: 480px) {
    margin-top: 20vw;
    height: 65vw;
  }
`;

export const $Title = styled.div`
  color: ${colors["pink"]};
  font-size: 4vw;
  font-family: "GothamBlack";
  @media (max-width: 480px) {
    font-size: 7.5vw;
    margin-bottom: 4vw;
  }
`;

export const $SliderWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const $Slider = styled.ul`
  position: absolute;
  left: 0;
  width: calc(35vw * 6);
  display: flex;
  animation: ${infinite} 40s linear infinite;
  @media (max-width: 480px) {
    width: calc(60vw * 6);
    display: flex;
    animation: ${infiniteMobile} 40s linear infinite;
  }
`;

export const $BtnWrapper = styled.div`
  transform: translateY(11vw);
  @media (max-width: 480px) {
    transform: translateY(33vw);
  }
`;
