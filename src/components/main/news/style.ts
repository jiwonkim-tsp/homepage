import styled from "styled-components";
import colors from "./../../../constants/color";

export const $Wrapper = styled.div`
  position: relative;
  height: 100%;
`;

export const $PositionWrapper = styled.div`
  position: absolute;
  top: 60vw;
  color: white;
  width: 100%;
  height: 50vw;
  display: flex;
  gap: 6vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const $Title = styled.div`
  color: ${colors["pink"]};
  text-transform: uppercase;
  font-size: 2.5vw;
`;

export const $Slider = styled.ul`
  display: flex;
  gap: 5vw;
`;

export const $BtnWrapper = styled.div``;
