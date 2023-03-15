import styled from "styled-components";

export const $Wrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8vw;
  background-color: pink;
`;

export const $VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: pink;
  video {
    position: absolute;
    top: 0;
  }
`;

export const $Phrases = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  animation: delay;
  animation-delay: 2s;
`;

export const $BtnWrapper = styled.div`
  transform: translateY(1vw);
  @media screen and (max-width: 800px) {
    transform: translateY(-3vw);
  }
  @media screen and (max-width: 600px) {
    transform: translateY(-5vw);
  }
`;
