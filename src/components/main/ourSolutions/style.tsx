import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  margin-top: 10vw;
  width: 100vw;
  height: 70vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 480px) {
    height: 90vw;
  }
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 10vw;
  right: -10vw;
  img {
    overflow-x: hidden;
    width: 55vw;
    transform: rotate(-20deg);
  }
`;

export const $ContentWrapper = styled.div`
  transform: translate(15vw, 30vw);
  @media (max-width: 480px) {
    transform: translate(15vw, 25vw);
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
  transform: translate(0vw, 3vw);
`;
