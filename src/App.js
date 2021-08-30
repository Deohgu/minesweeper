import React from "react";
import { Provider } from "react-redux";
import store from "./App/store";

import { GlobalStyle } from "./App.styled";

import { Game } from "./components/Game/Game";

import { Box } from "./components/Box";

export const App = () => {
  return (
    <Provider store={store}>
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        width={"calc(100vw)"}
        height={"100vh"}
        backgroundColor={"hsl(0, 0%, 15%)"}
      >
        <GlobalStyle />
        <Game />
      </Box>
    </Provider>
  );
};
