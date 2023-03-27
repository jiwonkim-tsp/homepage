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

export const $Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 30vw;
  display: flex;
  gap: 5vw;
  flex-direction: column;
  align-items: center;
`;

export const $Title = styled.div`
  color: ${colors["pink"]};
  font-size: 4vw;
  font-family: "GothamBlack";
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
`;

export const $BtnWrapper = styled.div`
  transform: translateY(11vw);
`;
