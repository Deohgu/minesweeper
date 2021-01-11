import React from "react";

import { Container, GlobalStyle } from "./App.styled";

import { Game } from "./components";

export const App = () => {
  return (
    <Container>
      {/* Container to be replaced with a reusable container component */}
      <GlobalStyle />
      <Game />
    </Container>
  );
};
