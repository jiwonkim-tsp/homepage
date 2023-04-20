import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled(motion.div)`
  width: 100vw;
  height: 95vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vw;
  @media (max-width: 480px) {
    height: 220vw;
    margin-top: 15vw;
  }
`;

export const $Title = styled.div`
  color: ${colors["pink"]};
  font-size: 4vw;
  font-family: "GothamBlack";
  margin-bottom: 1vw;
  @media (max-width: 480px) {
    font-size: 7.5vw;
    margin-bottom: 4vw;
  }
`;

export const $Awards = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3vw;
  column-gap: 3vw;
  padding-right: 2.5vw;
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 0vw;
    column-gap: 7.5vw;
  }
`;

export const $List = styled.li`
  img {
    width: 17vw;
  }
  @media (max-width: 480px) {
    img {
      width: 27vw;
    }
  }
`;
export const $Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const $ContentUl = styled.ul`
  img {
    width: 17vw;
  }
  @media (max-width: 480px) {
    img {
      width: 27vw;
    }
  }
  @media (max-width: 480px) {
    width: 60vw;
  }
`;
export const $ContentLi = styled.li`
  margin-bottom: 1vw;
  font-family: "NanumSquare";
  font-size: 1.5vw;
  color: white;
  word-break: keep-all;
  @media (max-width: 480px) {
    font-family: "NanumSquare";
    font-size: 3.5vw;
    line-height: 1.5;
  }
`;
