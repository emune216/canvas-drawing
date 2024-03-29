import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    overflow: hidden;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;

    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }
    @media only screen and (min-width: 600px){
      font-size: 2rem;
    }
  }
`;

export default GlobalStyle;
