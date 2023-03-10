import styled from "styled-components";

export const $Wrapper = styled.div``;

export const $Header = styled.header`
  width: 100%;
  height: 100px;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 600px) {
    height: 80px;
  }
`;

export const $Logo = styled.div`
  cursor: pointer;
  width: 300px;
  height: 80px;
  img {
    width: 300px;
    height: 80px;
  }
  @media screen and (max-width: 600px) {
    width: 200px;
    height: 50px;
    img {
      width: 200px;
      height: 50px;
    }
  }
`;

export const $Toggle = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
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
  @media screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
    svg {
      color: #f5d4e4;
      font-size: 20px;
    }
  }
`;
