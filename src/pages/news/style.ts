import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  margin-top: 23vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const $Title = styled(motion.h1)`
  font-family: "GothamBlack";
  color: #fff;
  font-size: 12vw;
  text-transform: uppercase;
  margin-bottom: 10vw;
`;

export const $News = styled(motion.ul)`
  display: grid;
  column-gap: 9vw;
  grid-template-columns: 35vw 35vw;
`;

export const $Content = styled.div`
  margin-bottom: 7vw;
`;

export const $ContentBtnWrapper = styled.div`
  transform: translate(32vw, 28vw);
`;

export const $Sentence = styled.div`
  display: flex;
  flex-direction: column;
`;

export const $Word = styled.div`
  font-family: "GothamBlack";
  color: #fff;
  font-size: 10vw;
  &:nth-child(3) {
    transform: translateX(10vw);
  }
`;
