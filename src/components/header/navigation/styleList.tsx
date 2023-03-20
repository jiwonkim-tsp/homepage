import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "./../../../constants/color";

export const $List = styled(motion.li)<{ color: string }>`
  position: relative;
  &:before {
    content: "";
    width: 2vw;
    height: 2vw;
    position: absolute;
    top: 50%;
    left: -5vw;
    background-color: ${({ color }) => colors[color]};
    border-radius: 50%;
  }
  a {
    text-decoration: none;
    color: ${colors["black"]};
  }
`;
