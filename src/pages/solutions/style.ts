import styled from "styled-components";

export const $Wrapper = styled.div`
  /* overflow-x: hidden; */
  width: 100vw;
  height: 160vw;
  margin-top: 18vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 480px) {
    height: 370vw;
    margin-top: 28vw;
  }
`;

export const $Solutions = styled.ul`
  display: flex;
  flex-direction: column;
`;
