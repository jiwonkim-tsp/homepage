import styled from "styled-components";

export const $Wrapper = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 70vw;
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
`;

export const $PositionWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateX(35%);
`;

export const $ImgBtnWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 50px 0;
`;

export const $ImgBox = styled.div`
  width: 30vw;
  img {
    width: 30vw;
  }
`;
