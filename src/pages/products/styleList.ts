import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $List = styled.li<{ id: number }>`
  display: flex;
  align-items: center;
`;

export const $ImgBox = styled(motion.div)<{ id: number }>`
  img {
    width: 50vw;
    transform: ${({ id }) =>
      id % 2 === 0
        ? "rotate(15deg) translateX(10vw)"
        : "rotate(-15deg) translateX(-10vw)"};
  }
`;

export const $ProductInfo = styled.div<{ id: number }>`
  width: 50vw;
  position: relative;
  z-index: 1;
  transform: ${({ id }) =>
    id % 2 === 0 ? "translate(10vw, -10vw)" : "translate(-5vw, -10vw)"};
  order: ${({ id }) => (id % 2 === 0 ? "-1" : "")};
`;

export const $Title = styled.h1`
  font-size: 3.5vw;
  font-weight: bold;
  margin: 2vw 0;
  color: ${colors["pink"]};
  text-transform: uppercase;
`;

export const $Content = styled.div`
  font-family: "GothamBook";
  font-size: 3vw;
  line-height: 1.25;
`;

export const $Sentence = styled.span`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
`;
