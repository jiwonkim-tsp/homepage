import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100vw;
  height: 70vw;
  position: relative;
`;

export const $PositionWrapper = styled.div`
  transform: translate(30vw, 30vw);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const $ImgBox = styled(motion.div)`
  img {
    width: 35vw;
  }
`;

export const $ContentWrapper = styled.div`
  transform: translateX(18vw);
`;

export const $Title = styled.h1`
  font-family: "NanumSquareEB";
  font-size: 3.5vw;
  margin: 2vw 0;
  color: ${colors["pink"]};
  text-transform: uppercase;
`;

export const $BtnWrapper = styled.div`
  transform: translateY(2vw);
`;
