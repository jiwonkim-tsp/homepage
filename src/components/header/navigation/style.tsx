import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "./../../../constants/color";

const height = window.innerHeight;

export const $Wrapper = styled(motion.div)`
  position: fixed;
  z-index: 11;
  top: 6vw;
  width: 100vw;
  height: ${height};
  background-color: ${colors["beige"]};
`;

export const $Nav = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 150px;
  transform: translate(38vw, -0.5vw);
  /* position: absolute; */
`;
