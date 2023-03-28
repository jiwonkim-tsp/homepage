import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled(motion.div)`
  width: 100vw;
  height: 20vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vw;
  @media (max-width: 480px) {
    height: 50vw;
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
    column-gap: 7vw;
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
