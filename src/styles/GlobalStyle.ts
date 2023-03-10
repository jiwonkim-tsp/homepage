import { createGlobalStyle } from "styled-components";
import ResetStyle from "./resetStyle";
import GothamOtf from "./../assets/font/Gotham-Black.otf";
import GothamTtf from "./../assets/font/Gotham-Black.ttf";
import Korean from "./../assets/font/한국기계연구원_Light.ttf";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  @font-face {
  font-family: "Gotham";
  src: url(${GothamTtf}) format("truetype"),
      url(${GothamOtf}) format("opentype");
  }

  @font-face {
    font-family: "한국기계연구원";
    font-display: fallback;
    src: url(${Korean}) format("truetype");
  }

  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Gotham', '한국기계연구원';
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
