import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled(motion.div)`
  width: 100vw;
  height: 40vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const $Title = styled.div`
  color: ${colors["pink"]};
  font-size: 4vw;
  font-family: "GothamBlack";
`;

export const $Clients = styled(motion.ul)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 0vw;
`;

export const $List = styled.li`
  height: 10vw;
  img {
    width: 18vw;
  }
`;
