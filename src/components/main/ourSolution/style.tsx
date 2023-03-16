import styled from "styled-components";
import colors from "./../../../constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100%;
  height: 70vw;
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
`;

export const $PositionWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 28vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateX(35%);
`;

export const $ImgBtnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 50px 0;
`;

export const $ImgBox = styled(motion.div)`
  width: 30vw;
  img {
    width: 30vw;
  }
`;

export const $ContentWrapper = styled.div`
  transform: translateX(40%);
`;

export const $Heading = styled.h1`
  font-size: 3.5vw;
  font-weight: bold;
  margin: 25px 0;
  color: ${colors["pink"]};
  text-transform: uppercase;
`;

export const $Content = styled.div`
  font-family: "GothamBook";
  font-size: 3vw;
  line-height: 1.25;
`;

export const $Sentence = styled.p`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
`;
