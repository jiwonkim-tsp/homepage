import styled from "styled-components";
import colors from "@Constants/color";

export const $Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors["black"]};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  video {
    width: 30%;
  }
  video::-webkit-media-controls-play-button {
    display: none !important;
  }
  @media (max-width: 480px) {
    video {
      width: 50%;
    }
  }
`;
