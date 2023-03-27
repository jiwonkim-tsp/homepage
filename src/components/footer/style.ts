import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div`
  width: 100%;
  position: relative;
  iframe {
    display: none;
  }
`;

export const $PositionWrapper = styled.div<{ page: string }>`
  background-color: ${colors["purple"]};
  position: absolute;
  width: 100%;
  height: 40vw;
  top: ${({ page }) =>
    page === "main"
      ? "30vw"
      : page === "company"
      ? "180vw"
      : page === "works"
      ? "20vw"
      : "40vw"};
  &:before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 20vw;
    overflow: hidden;
    background-color: ${colors["purple"]};
    border-radius: 50%;
    top: -10vw;
    left: 0;
  }
`;

export const $Content = styled.div`
  position: absolute;
  z-index: 1;
  top: 0vw;
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
  transform: translate(20vw, 0vw);
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;
  position: relative;
  z-index: 1;
  button {
    border-radius: 2.5vw;
    font-size: 1.5vw;
    padding: 1vw 2vw;
    background-color: ${colors["green"]};
    transform: translate(-30vw, 2vw);
  }
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
  top: 1.5vw;
  right: 3vw;
  display: flex;
  gap: 1.5vw;
`;

export const $SnsList = styled.li`
  font-size: 2.5vw;
  color: #fff;
`;
