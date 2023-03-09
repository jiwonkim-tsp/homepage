import styled from "styled-components";

export const $Wrapper = styled.div``;

export const $Header = styled.header`
  width: 100%;
  height: 100px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: rgb(255, 255, 255, 0.7); */
`;

export const $Logo = styled.div`
  cursor: pointer;
  width: 320px;
  height: 90px;
  img {
    width: 320px;
    height: 90px;
  }
`;

export const $Toggle = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  /* border: 3px solid #a379b5; */
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: #f5d4e4;
    font-size: 35px;
    /* stroke-width: 5; */
  }
`;
