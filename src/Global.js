import { createGlobalStyle } from 'styled-components';
import rubik from './Fonts/rubik-regular-webfont.woff2';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: "rubikregular";
    src: url(${rubik}) format("woff2");
    font-weight: normal;
    font-style: normal;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  border: 0;
}
html {
  font-size: 62.5%;
  font-family:'rubikregular';
}
body{
  background:${(props) => props.theme.background}
}
a{
  text-decoration:none;
}

ul{
 list-style-type:none;
}

`;
