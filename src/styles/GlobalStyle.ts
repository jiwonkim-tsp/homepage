import { createGlobalStyle } from "styled-components";
import ResetStyle from "./resetStyle";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}
  @font-face {
    font-family: 'yg-jalnan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }
  html {
    //font
  }
  body {
    overflow-x: hidden;
    overflow-y: auto;
  }
  h1, h2, h3, h4, h5, h6, button {
    font-family: 'yg-jalnan';
  }
`;

export default GlobalStyle;
