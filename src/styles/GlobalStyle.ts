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
    scroll-behavior: smooth;
    //font
  }
  body {
  width: 100vw;
  height: 100%;
  overflow: hidden;
  background-color: #7a67ae;
  background-image: linear-gradient(135deg, #7a67ae 0%, #a379b5 27%, #e8d0dc 100%);
  background-attachment: fixed;
  }
  h1, h2, h3, h4, h5, h6, button {
    font-family: 'yg-jalnan';
  }
`;

export default GlobalStyle;
