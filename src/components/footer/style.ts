import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div<{ page: string }>`
  width: 100%;
  height: 40vw;
  background-color: ${colors["purple"]};
  position: relative;
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
  iframe {
    display: none;
  }
  @media (max-width: 480px) {
    height: ${({ page }) =>
      page === "solutions" || page === "products" ? "55vw" : ""};
  }
`;

export const $Content = styled.div`
  width: 100vw;
  position: absolute;
  z-index: 1;
  top: -2vw;
  color: #fff;
  font-size: 10vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const $Word = styled.div`
  font-family: "GothamBlack";
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
    font-family: "NanumSquareEB";
  }
  @media (max-width: 480px) {
    transform: translate(20vw, -2vw);
    button {
      font-size: 3vw;
      padding: 1.5vw 8vw;
      transform: translate(-21.5vw, 2vw);
    }
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
  @media (max-width: 480px) {
    input {
      height: 7vw;
      width: 70vw;
      font-size: 3vw;
    }
  }
`;

export const $Label = styled.label`
  font-size: 1.5vw;
  color: #fff;
  font-family: "NanumSquareEB";
  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;

export const $CompanyInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5vw;
  padding: 0.5vw;
  border-top: 1px solid #1d1d20;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    height: 8vw;
  }
`;

export const $LogoBox = styled.div`
  img {
    width: 11vw;
  }
  @media (max-width: 480px) {
    img {
      width: 15vw;
    }
  }
`;

export const $SnsBox = styled.ul`
  position: absolute;
  bottom: 0.6vw;
  right: 4vw;
  display: flex;
  align-items: center;
  gap: 1.5vw;
  @media (max-width: 480px) {
    bottom: 0vw;
    height: 7vw;
    right: 6vw;
    gap: 3vw;
  }
`;

export const $SnsList = styled.li`
  font-size: 2.8vw;
  a {
    color: #fff;
  }
  @media (max-width: 480px) {
    font-size: 5vw;
  }
`;
