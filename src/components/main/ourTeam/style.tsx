import styled from "styled-components";

const height = window.innerHeight;

export const $Wrapper = styled.div`
  position: relative;
  background-color: #f1c6db;
  /* height: ${height}px; */
  /* height: 100vh; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: -100px;
    width: 100%;
    height: 200px;
    border-radius: 50%;
    background-color: #f1c6db;
  }
`;

export const $ContentWrapper = styled.div`
  padding: 10vw;
  font-weight: bold;
  color: #0a3ed1;
  z-index: 1;
`;

export const $Heading = styled.h1`
  font-size: 5vw;
  margin-top: 20px;
  margin-bottom: 50px;
`;

export const $Content = styled.p`
  font-size: 4vw;
  line-height: 1.25;
`;
