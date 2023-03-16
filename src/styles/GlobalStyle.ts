import { createGlobalStyle } from "styled-components";
import ResetStyle from "./resetStyle";
import GothamBlack from "./../assets/font/GothamBlack.otf";
import GothamBlackTtf from "./../assets/font/Gotham-Black.ttf";
import GothamBold from "./../assets/font/Gotham-Bold.otf";
import GothamTtfBold from "./../assets/font/Gotham-Bold.ttf";
import GothamBook from "./../assets/font/Gotham-Book.otf";
import GothamTtfBook from "./../assets/font/Gotham-Book.ttf";
import GothamMedium from "./../assets/font/Gotham-Medium.otf";
import GothamTtfMedium from "./../assets/font/Gotham-Medium.ttf";
import NanumSquare from "./../assets/font/NanumSquareR.otf";
import NanumSquareTtf from "./../assets/font/NanumSquareR.ttf";

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  @font-face {
  font-family: "GothamBlack";
  src: url(${GothamBlackTtf}) format("truetype"),
      url(${GothamBlack}) format("opentype");
  font-style: normal;
  }

  @font-face {
  font-family: "Gotham";
  src: url(${GothamTtfBold}) format("truetype"),
      url(${GothamBold}) format("opentype");
  font-weight: bold;
  font-style: normal;
  }

  @font-face {
  font-family: "GothamBook";
  src: url(${GothamTtfBook}) format("truetype"),
      url(${GothamBook}) format("opentype");
  font-style: normal;
  }

  @font-face {
  font-family: "Gotham";
  src: url(${GothamTtfMedium}) format("truetype"),
      url(${GothamMedium}) format("opentype");
  font-weight: normal;
  font-style: normal;
  }

  @font-face {
  font-family: "NanumSquare";
  src: url(${NanumSquareTtf}) format("truetype"),
      url(${NanumSquare}) format("opentype");
  font-weight: normal;
  font-style: normal;
  }



  * {
    box-sizing: border-box;
  }
  html {
    font-family: 'Gotham';
  }
  body {
  background-color: #1D1D20;
  overflow-x: hidden;
  }
`;

export default GlobalStyle;
