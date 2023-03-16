import styled from "styled-components";
import colors from "./../../../constants/color";

export const $Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 9vw;
`;

export const $Header = styled.header<{ openNav: boolean }>`
  position: fixed;
  z-index: 15;
  top: 0;
  width: 100%;
  padding: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ openNav }) =>
    openNav ? colors["beige"] : colors["black"]};
`;

export const $Logo = styled.div`
  cursor: pointer;
  width: 15vw;
  img {
    width: 15vw;
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
`;
