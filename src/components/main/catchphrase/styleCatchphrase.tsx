import styled from "styled-components";

export const $Wrapper = styled.div`
  position: relative;
  top: 9vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8vw;
`;

export const $VideoWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  video {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const $Phrases = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(6vw);
  animation-delay: 2s;
`;

export const $BtnWrapper = styled.div`
  transform: translateY(6vw);
`;
