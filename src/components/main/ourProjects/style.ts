import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "./../../../constants/color";

export const $Wrapper = styled.div`
  position: relative;
  background-color: red;
  width: 40%;
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: 20%;
  left: -18%;
  width: 50vw;
  img {
    width: 50vw;
    transform: rotate(30deg);
  }
`;

export const $BtnContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const $ContentWrapper = styled.div`
  /* transform: translate(20%, 20%);/ */
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
