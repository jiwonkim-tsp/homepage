import { createGlobalStyle } from "styled-components";
import ResetStyle from "./resetStyle";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    font-family: Gotham;
  }
  body {
  height: 100%;
  width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  overscroll-behavior-x: none;
  background-color: #6c4aca;
  background-image: linear-gradient(118deg, #6c4aca 0%, #ad61cd 18%, #f1c6db 66%, #ffffff 100%);
  background-attachment: fixed;
  }
`;

export default GlobalStyle;
