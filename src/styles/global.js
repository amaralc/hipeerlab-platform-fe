import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  body, p {
    text-align: justify;
    font-family: 'Roboto', sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
`;
