import styled from "styled-components";
import { motion } from "framer-motion";
import colors from "@Constants/color";

export const $Wrapper = styled(motion.div)`
  width: 100vw;
  height: 50vw;
  position: relative;
`;

export const $PositionWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const $Title = styled.div`
  color: ${colors["pink"]};
  font-size: 2.5vw;
  font-family: "NanumSquareEB";
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
