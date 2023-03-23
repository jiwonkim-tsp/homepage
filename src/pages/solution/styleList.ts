import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $List = styled.li<{ order: number }>`
  display: flex;
  align-items: center;
  font-family: "NanumSquare";
`;

export const $ImgBox = styled(motion.div)<{ order: number }>`
  img {
    width: 50vw;
    transform: ${({ order }) =>
      order % 2 === 0
        ? "rotate(15deg) translateX(10vw)"
        : "rotate(-15deg) translateX(-10vw)"};
  }
`;

export const $ProductInfo = styled.div<{ order: number; isSol: boolean }>`
  border: 1px solid red;
  width: ${({ isSol }) => (isSol ? "50vw" : "40vw")};
  position: relative;
  z-index: 1;
  transform: ${({ order }) =>
    order % 2 === 0 ? "translate(10vw, -10vw)" : "translate(-5vw, -10vw)"};
  order: ${({ order }) => (order % 2 === 0 ? "-1" : "")};
`;

export const $Title = styled.h1`
  font-family: "NanumSquareBold";
  font-size: 3.5vw;
  margin: 2vw 0;
  color: ${colors["pink"]};
  text-transform: uppercase;
`;

export const $Content = styled.div`
  font-size: 3vw;
  line-height: 1.25;
`;

export const $Sentence = styled.span`
  font-family: "NanumSquare";
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  font-family: "NanumSquareB";
  color: ${({ color }) => colors[color]};
  word-break: keep-all;
`;
