import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $List = styled(motion.li)<{ order: number }>`
  margin-bottom: 3vw;
  &:nth-child(2n) {
    margin-top: 4vw;
  }
  @media (max-width: 480px) {
    &:nth-child(2n) {
      margin-top: 0vw;
    }
  }
  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 1.7vw;
  }
`;

export const $Press = styled.div`
  color: ${colors["pink"]};
  font-size: 1vw;
  font-family: "GothamBlack", "NanumSquareEB";
  @media (max-width: 480px) {
    font-size: 2.6vw;
  }
`;

export const $Title = styled.div`
  color: ${colors["yellow"]};
  font-family: "NanumSquare";
  font-weight: bold;
  word-break: keep-all;
  font-size: 1.7vw;
  line-height: 1.2;
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;

export const $Content = styled.div`
  font-family: "NanumSquare";
  color: #fff;
  line-height: 1.2;
  font-size: 1.2vw;
  @media (max-width: 480px) {
    font-size: 3.2vw;
  }
`;
