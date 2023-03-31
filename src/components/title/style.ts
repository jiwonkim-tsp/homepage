import styled from "styled-components";
import { motion } from "framer-motion";

export const $Title = styled(motion.h1)`
  font-family: "GothamBlack";
  color: #fff;
  font-size: 6vw;
  text-transform: capitalize;
  margin-bottom: 10vw;
  @media (max-width: 480px) {
    font-size: 12vw;
  }
`;
