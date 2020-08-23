import React from "react";

import { Theme, GlobalStyle } from "./App.styled";

import { Cell, Board, Game } from "./components";

export const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <Cell />
      <Board />
      <Game />
    </Theme>
  );
};
