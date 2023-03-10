import { createGlobalStyle } from "styled-components";
import ResetStyle from "./resetStyle";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  * {
    box-sizing: border-box;
  }
  html {
    font-family: Gotham;
  }
  body {
  background-color: #6c4aca;
  background-image: linear-gradient(118deg, #6c4aca 0%, #ad61cd 18%, #f1c6db 66%, #ffffff 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow-x: hidden;
  }
`;

export default GlobalStyle;
