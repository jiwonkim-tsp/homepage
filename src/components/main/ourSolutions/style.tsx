import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100vw;
  height: 70vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 10vw;
  right: -10vw;
  img {
    width: 55vw;
    transform: rotate(-20deg);
  }
`;

export const $ContentWrapper = styled.div`
  transform: translate(15vw, 30vw);
`;

export const $Title = styled.h1`
  font-family: "GothamBlack";
  font-size: 4vw;
  margin: 2vw 0;
  color: ${colors["pink"]};
`;

export const $BtnWrapper = styled.div`
  transform: translate(15vw, 32vw);
`;
