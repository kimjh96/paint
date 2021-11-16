import { createGlobalStyle } from 'styled-components';
import StyledReset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${StyledReset}
  html {
    height: 100%;
  }
  body {
    height: 100%;
  }
  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
