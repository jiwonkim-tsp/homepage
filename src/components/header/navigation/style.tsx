import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "./../../../constants/color";

const height = window.innerHeight;

export const $Wrapper = styled(motion.div)`
  position: fixed;
  z-index: 11;
  top: 6vw;
  width: 100%;
  height: ${height};
  height: 100vh;
  background-color: ${colors["beige"]};
`;

export const $Nav = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 150px;
  position: absolute;
  right: 1.5vw;
  bottom: 0vw;
`;
