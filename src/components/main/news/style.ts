import styled from "styled-components";
import colors from "./../../../constants/color";
import Slider from "react-slick";

export const $Wrapper = styled.div`
  position: relative;
`;

export const $PositionWrapper = styled.div`
  position: absolute;
  top: 50vw;
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
  text-transform: uppercase;
  font-size: 2.5vw;
  font-weight: bold;
`;

export const $Slider = styled(Slider)`
  transform: translateX(4vw);
  width: 100%;
  .slick-dots {
    transform: translateX(-8vw);
    position: absolute;
    bottom: -10vw;
    width: 100%;
    list-style: none;
    .slick-active {
      button::before {
        color: ${colors["green"]};
      }
    }
    button::before {
      color: ${colors["purple"]};
    }
  }
  .slick-dots li {
    width: 1vw;
    height: 1vw;
  }
`;

export const $BtnWrapper = styled.div`
  transform: translate(-3.5vw, 8vw);
`;
