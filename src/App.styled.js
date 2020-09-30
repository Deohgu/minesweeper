import styled, { createGlobalStyle } from "styled-components";

export const Theme = styled.div`
  width: calc(100vw - (100vw - 100%));
  height: calc(100vh - (100vh - 100%));
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;
