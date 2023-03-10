import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const animationgradienttitle = keyframes`
  0% {
      background-position: 0 1600px;
  }
  100% {
      background-position: 1600px 0;
  }
`;

export const $List = styled(motion.li)`
  a {
    font-size: 7vw;
    font-weight: bold;
    text-decoration: none;
    background: #4c0080;
    background: linear-gradient(to right, #4c0080 0%, #f0c5da 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    &:hover {
      background-size: 1600px 200px;
      animation-name: ${animationgradienttitle};
      animation-duration: 1s;
    }
  }
`;
