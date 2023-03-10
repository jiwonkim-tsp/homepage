import styled from "styled-components";
import { motion, useCycle } from "framer-motion";

export const $Wrapper = styled.div`
  /* position: absolute;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh; */
  padding-bottom: 7%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

export const $Nav = styled(motion.ul)`
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: flex-end;
`;

export const $Contact = styled.div`
  color: #4c0080;
  font-size: 2.5vw;
`;

export const $Title = styled.div`
  padding-bottom: 50px;
`;

export const $Content = styled.div`
  font-family: "한국기계연구원";
  font-weight: bold;
  padding-bottom: 20px;
`;
