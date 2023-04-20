import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div<{ page: string }>`
  width: 100%;
  height: 35vw;
  position: relative;
  overflow: hidden;
  padding-top: 5vw;
  &:before {
    content: "";
    position: absolute;
    width: 50vw;
    height: 50vw;
    background-color: ${colors["purple"]};
    border-radius: 50%;
    top: 0vw;
    left: 25%;
  }
  @media (max-width: 480px) {
    height: "80vw";
    &:before {
      width: 80vw;
      height: 80vw;
      left: 11%;
    }
  }
`;

export const $ContentWrapper = styled.div`
  height: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const $Contact = styled.div`
  position: relative;
  bottom: 4vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 480px) {
    bottom: 1vw;
  }
  input {
    position: absolute;
    left: 9999999999vw;
  }
`;

export const $ContactTitle = styled.div`
  z-index: 1;
  font-family: "GothamBlack";
  color: #fff;
  font-size: 7vw;
  margin-bottom: 4vw;
  @media (max-width: 480px) {
    margin-bottom: 1.5vw;
    font-size: 9vw;
  }
`;
export const $ContactUl = styled.ul`
  color: #fff;
  font-family: "NanumSquare";
  font-size: 3vw;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  gap: 2vw;
  @media (max-width: 480px) {
    font-size: 4vw;
    gap: 1vw;
  }
`;
export const $ContactLi = styled.li`
  cursor: pointer;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

export const $Content = styled.div`
  width: 100vw;
  z-index: 1;
  color: #fff;
  font-size: 7vw;
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

export const $VideoBox = styled.div`
  position: absolute;
  top: -28vw;
  left: -10vw;
  width: 50vw;
`;

export const $CompanyInfo = styled.div`
  width: 100%;
  height: 5vw;
  padding: 0.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    height: 8vw;
  }
`;

export const $Rights = styled.div`
  z-index: 1;
  font-family: "NanumSquare";
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 1vw;
  img {
    width: 11vw;
  }
  @media (max-width: 480px) {
    img {
      width: 15vw;
    }
    margin-bottom: 1vw;
  }
  span {
    font-size: 1.3vw;
    margin-top: 0.1vw;
  }
`;

export const $SnsBox = styled.ul`
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 1.5vw;
  @media (max-width: 480px) {
    height: 5vw;
    gap: 3vw;
  }
`;

export const $SnsList = styled.li`
  margin-bottom: 1vw;
  font-size: 2vw;
  a {
    color: #fff;
  }
  @media (max-width: 480px) {
    font-size: 4vw;
  }
`;
