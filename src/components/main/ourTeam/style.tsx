import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "./../../../constants/color";

export const $Wrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 20%;
  right: 0%;
  width: 50vw;
  img {
    width: 50vw;
  }
`;

export const $ContentWrapper = styled.div`
  padding: 10vw;
  transform: translate(20%, 20%);
`;

export const $Heading = styled.h1`
  font-size: 3vw;
  font-weight: bold;
  margin: 25px 0;
  color: ${colors["pink"]};
  text-transform: uppercase;
`;

export const $Content = styled.div`
  font-size: 2.5vw;
  line-height: 1.25;
`;

export const $Sentence = styled.p`
  color: #fff;
`;
export const $ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => colors[color]};
`;
