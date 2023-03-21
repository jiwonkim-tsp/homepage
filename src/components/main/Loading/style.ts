import styled from "styled-components";
import colors from "./../../../constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: #342e35;
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 100;

  video {
    width: 30%;
  }
`;
