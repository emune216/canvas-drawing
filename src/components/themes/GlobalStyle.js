import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    @media (max-width: 575.98px) {
      font-size: 0.5rem;
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
      font-size: 0.75rem;
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
      font-size: 1rem;
    }
    @media (min-width: 992px) and (max-width: 1199.98px) {
      font-size: 1.25rem;
    }
    @media (min-width: 1200px){
      font-size: 1.5rem;
    }
  }
`;

export default GlobalStyle;
