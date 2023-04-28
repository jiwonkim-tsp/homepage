import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100vw;
  margin-top: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5vw;
  @media (max-width: 480px) {
    margin-top: 28vw;
  }
`;

export const $Works = styled(motion.ul)`
  display: grid;
  place-items: center;
  row-gap: 0vw;
  grid-template-columns: 35vw 35vw;
  margin: 0;
  @media (max-width: 480px) {
    grid-template-columns: 60vw;
    margin-top: 5vw;
    row-gap: 10vw;
  }
`;

export const $BtnWrapper = styled.div`
  margin: 7vw 0;
`;
