import styled from "styled-components";
import colors from "./../../../constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled(motion.div)`
  /* transform: translate(10vw, 20vw); */
  /* width: 100vw;
  height: 100vh; */
  background-color: ${colors["black"]};
  display: flex;
  align-items: center;
  justify-content: center;
`;
