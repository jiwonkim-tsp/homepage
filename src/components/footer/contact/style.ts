import styled from "styled-components";
import colors from "@Constants/color";

export const $Contact = styled.form`
  background-color: pink;
  /* width: 60vw; */
  border-radius: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5vw;
  position: absolute;
  top: 10vw;
  /* z-index: 2; */
  button {
    border-radius: 2.5vw;
    font-size: 1.5vw;
    padding: 1vw 2vw;
    background-color: ${colors["green"]};
    font-family: "NanumSquareEB";
  }
  @media (max-width: 480px) {
    transform: translate(20vw, -2vw);
    button {
      font-size: 3vw;
      padding: 1.5vw 8vw;
      transform: translate(-21.5vw, 2vw);
    }
  }
`;

export const $List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  input {
    border: none;
    height: 4vw;
    padding-left: 1vw;
    font-size: 1.5vw;
  }

  input:focus {
    outline: none;
  }
  :nth-child(2) {
    input {
      height: 10vw;
    }
  }
  @media (max-width: 480px) {
    input {
      height: 7vw;
      width: 70vw;
      font-size: 3vw;
    }
  }
`;

export const $Label = styled.label`
  font-size: 1.5vw;
  color: #fff;
  font-family: "NanumSquareEB";
  @media (max-width: 480px) {
    font-size: 3vw;
  }
`;
