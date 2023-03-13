import styled from "styled-components";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  position: relative;
  background-color: #f1c6db;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  /* background-color: red; */
  transform: translate3d(0px, -75px, 0px);
`;

export const $BorderRadius = styled(motion.div)`
  width: 100%;
  height: 200px;
  background-color: #f1c6db;
  /* background-color: red; */
  border-radius: 50%;
  position: absolute;
  top: -100px;
`;

export const $ContentWrapper = styled.div`
  padding: 10vw;
  font-weight: bold;
  color: #774ecb;
  z-index: 1;
`;

export const $Heading = styled.h1`
  font-size: 5vw;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const $Content = styled.p`
  font-size: 4vw;
  line-height: 1.25;
`;
