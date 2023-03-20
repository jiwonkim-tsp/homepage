import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "./../../../constants/color";

export const $Wrapper = styled(motion.div)`
  position: fixed;
  z-index: 11;
  top: 7.5vw;
  width: 100%;
  height: 100vh;
  background-color: ${colors["beige"]};
`;

export const $Nav = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  right: 5vw;
  bottom: 10vw;
  font-family: "GothamBlack";
  font-size: 7.6vw;
  @media (max-width: 1100px) {
    font-size: 12vw;
  }
  @media (max-width: 790px) {
    bottom: 20vw;
    font-size: 17vw;
  }
  @media (max-width: 500px) {
    bottom: 55vw;
    font-size: 17vw;
    gap: 3vw;
  }
`;
