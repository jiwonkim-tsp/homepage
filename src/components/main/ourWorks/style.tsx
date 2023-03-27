import styled from "styled-components";

export const $Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2vw;
  position: absolute;
  top: 47vw;
  @media (max-width: 480px) {
    top: 60vw;
  }
`;
