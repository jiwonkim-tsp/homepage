import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100%;
  position: relative;
  iframe {
    background-color: red;
    transform: translateX(100vw);
  }
`;

export const $PositionWrapper = styled.div<{ main: boolean }>`
  background-color: ${colors["purple"]};
  position: absolute;
  width: 100%;
  height: 100%;
  height: 30vw;
  top: ${({ main }) => (main ? "140vw" : "40vw")};
  &:before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 34vw;
    overflow: hidden;
    background-color: ${colors["purple"]};
    border-radius: 50%;
    top: -17vw;
  }
`;

export const $BtnWrapper = styled.div<{ main: boolean }>`
  transform: ${({ main }) =>
    main ? "translate(58vw, 14vw)" : "translate(15vw, -3vw)"};
`;

export const $Content = styled.div`
  position: absolute;
  z-index: 1;
  top: -10vw;
  left: 25vw;
  color: #fff;
  font-size: 10vw;
  display: flex;
  flex-direction: column;
`;

export const $Word = styled.div`
  font-family: "GothamBlack";
  &:nth-child(3) {
    transform: translateX(10vw);
  }
`;

export const $ImgBox = styled(motion.div)`
  position: absolute;
  top: -28vw;
  left: -10vw;
  width: 50vw;
  img {
    width: 50vw;
  }
`;

export const $Contact = styled.form`
  transform: translate(20vw, -7vw);
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;
  position: relative;
  z-index: 1;
`;

export const $List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  input {
    border: none;
    height: 4vw;
    width: 70vw;
    padding-left: 1vw;
    font-size: 1.5vw;
  }
  input:focus {
    outline: none;
  }
`;

export const $Label = styled.label`
  font-size: 1.5vw;
  color: #fff;
  text-transform: uppercase;
`;

export const $CompanyInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.5vw;
  border-top: 1px solid #1d1d20;
  display: flex;
`;

export const $LogoBox = styled.div`
  transform: translateX(45vw);
  img {
    width: 10vw;
  }
`;

export const $SnsBox = styled.ul`
  position: absolute;
  top: 1vw;
  right: 3vw;
  display: flex;
  gap: 1.5vw;
`;

export const $SnsList = styled.li`
  font-size: 3vw;
  color: #fff;
`;
