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
`;

export const $PositionWrapper = styled.div`
  position: absolute;
  top: 60vw;
  color: white;
  width: 100%;
  height: 60vw;
  display: flex;
  gap: 8vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const $Title = styled.div`
  color: ${colors["pink"]};
  font-size: 2.5vw;
  font-family: "NanumSquareEB";
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
  transform: translateY(7vw);
`;
