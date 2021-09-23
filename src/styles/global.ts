import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;