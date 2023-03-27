import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled.div`
  position: relative;
  height: 80vw;
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 10vw;
  left: -10vw;
  img {
    width: 55vw;
    transform: rotate(20deg);
  }
  @media (max-width: 480px) {
    top: 20vw;
  }
`;

export const $ContentWrapper = styled.div`
  transform: translate(60vw, 42vw);
  @media (max-width: 480px) {
    transform: translate(40vw, 42vw);
  }
`;

export const $Title = styled.h1`
  font-family: "GothamBlack";
  font-size: 4vw;
  margin: 2vw 0;
  color: ${colors["pink"]};
  @media (max-width: 480px) {
    font-size: 7.5vw;
    margin: 3.5vw 0;
  }
`;

export const $BtnWrapper = styled.div`
  transform: translate(60vw, 45vw);
  @media (max-width: 480px) {
    transform: translate(40vw, 45vw);
  }
`;
