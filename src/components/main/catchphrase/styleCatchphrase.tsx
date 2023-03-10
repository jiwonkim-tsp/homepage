import styled from "styled-components";

const height = window.innerHeight;

export const $Wrapper = styled.div`
  width: 100%;
  height: ${height}px;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const $Phrases = styled.div`
  position: absolute;
  top: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  animation: delay;
  animation-delay: 2s;
`;
