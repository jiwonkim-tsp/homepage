import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  position: relative;
  margin-top: 10vw;
  display: flex;
  justify-content: center;
  margin-bottom: 210vw;
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 2vw;
  left: 50vw;
  img {
    width: 55vw;
  }
`;

export const $ImgBox2 = styled(motion.div)`
  position: absolute;
  left: -10vw;
  top: 134vw;
  img {
    width: 55vw;
  }
`;

export const $LogoBox = styled.div`
  position: absolute;
  top: 6vw;
  left: 10vw;
  img {
    width: 75vw;
  }
`;

export const $ContentWrapper = styled.div`
  position: absolute;
  z-index: 1;
  top: 45vw;
  display: flex;
  flex-direction: column;
  gap: 18vw;
`;

export const $Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vw;
  font-size: 2.5vw;
`;

export const $Sentence = styled.p`
  color: #fff;
  font-family: "NanumSquare";
  &:nth-child(1) {
    width: 45vw;
    word-break: keep-all;
    text-align: center;
    line-height: 1.25;
  }
  &:nth-child(2) {
    width: 68vw;
    word-break: keep-all;
    text-align: center;
    line-height: 1.25;
  }
`;

export const $ColoredWord = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
  font-family: "NanumSquareAc";
`;

export const $Year = styled.div`
  font-weight: bold;
  color: ${colors["pink"]};
  margin-bottom: 1vw;
`;
