import styled from "styled-components";
import colors from "@Constants/color";

export const $Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors["black"]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  img {
  }
  @media (max-width: 480px) {
    img {
      width: 95%;
    }
  }
`;
