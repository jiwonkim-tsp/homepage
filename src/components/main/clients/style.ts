import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled(motion.div)`
  width: 100vw;
  height: 45vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 480px) {
    margin-top: 10vw;
    height: 130vw;
  }
`;

export const $Title = styled.div`
  color: ${colors["pink"]};
  font-size: 4vw;
  font-family: "GothamBlack";
  @media (max-width: 480px) {
    margin-bottom: 5vw;
    font-size: 7.5vw;
  }
`;

export const $Clients = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 0vw;
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 40vw);
    row-gap: 5.5vw;
  }
`;

export const $List = styled.li`
  height: 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
  :nth-child(4) {
    padding-right: 3vw;
  }
  :nth-child(5) {
    padding-bottom: 1.5vw;
  }
  :nth-child(6) {
    padding-bottom: 1.5vw;
  }
  img {
    width: 18vw;
    :nth-child(4) {
      width: 20vw;
    }
  }
  @media (max-width: 480px) {
    img {
      width: 32vw;
    }
  }
`;
