import React from "react";

import { Theme, GlobalStyle } from "./App.styled";

import { Game } from "./components";

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Game />
    </Theme>
  );
};
