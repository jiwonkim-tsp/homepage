import styled from "styled-components";
import colors from "@Constants/color";

export const $Wrapper = styled.div<{ shown: boolean }>`
  position: fixed;
  left: 0;
  z-index: 12;
  width: 100vw;
  height: 7vw;
  display: flex;
  @media (max-width: 480px) {
    height: 12vw;
  }
`;

export const $Header = styled.header<{ openNav: boolean; shown: boolean }>`
  position: fixed;
  top: ${({ shown }) => (shown ? "-7vw" : "0")};
  left: 0;
  z-index: 4;
  width: 100vw;
  height: 7vw;
  padding: 3.5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ openNav }) =>
    openNav ? colors["beige"] : colors["black"]};
  @media (max-width: 480px) {
    height: 15vw;
    padding: 5vw 5vw;
  }
  transition: top 0.6s ease;
`;

export const $Logo = styled.div`
  cursor: pointer;
  img {
    width: 12vw;
  }
  @media (max-width: 480px) {
    margin-top: 1vw;
    img {
      width: 24vw;
    }
  }
`;

export const $BtnWrapper = styled.div`
  display: flex;
  gap: 2vw;
  align-items: center;
  a {
    text-decoration: none;
  }
`;

export const $ToggleBtn = styled.div<{ openNav: boolean }>`
  width: 3.5vw;
  height: 3.5vw;
  border: 2px solid ${colors["purple"]};
  border-radius: 50%;
  background-color: ${({ openNav }) => (openNav ? "#ffff" : colors["purple"])};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: bold;
  svg {
    color: ${({ openNav }) => (openNav ? "#000" : "#fff")};
    font-size: 1.5vw;
  }
  @media (max-width: 480px) {
    width: 7.8vw;
    height: 7.8vw;
    svg {
      font-size: 4vw;
    }
  }
`;
