import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100vw;
  height: 120vw;
  margin-top: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 480px) {
    height: 260vw;
    margin-top: 28vw;
  }
`;

export const $News = styled(motion.ul)`
  display: grid;
  column-gap: 4vw;
  grid-template-columns: 30vw 30vw;
  @media (max-width: 480px) {
    grid-template-columns: 60vw;
    row-gap: 8vw;
    margin-top: 10vw;
  }
`;
