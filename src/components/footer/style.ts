import styled from "styled-components";
import colors from "@Constants/color";
import { motion } from "framer-motion";

export const $Wrapper = styled.div<{ page: string }>`
  width: 100%;
  height: 30vw;
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
  @media (max-width: 480px) {
    height: ${({ page }) =>
      page === "solutions" || page === "products" ? "45vw" : ""};
  }
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
`;

export const $ContactTitle = styled.div`
  z-index: 1;
  font-family: "GothamBlack";
  color: #fff;
  font-size: 7vw;
  margin-bottom: 4vw;
  @media (max-width: 480px) {
    font-size: 10vw;
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
    font-size: 5vw;
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
  position: relative;
  bottom: 1.3vw;
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

export const $CompanyInfo = styled.div`
  position: absolute;
  bottom: 0;
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

export const $LogoBox = styled.div`
  color: #fff;
  font-size: 3vw;
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
