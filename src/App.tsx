import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import LogRocket from 'logrocket';

import { AppContainer, GlobalStyle } from "./App.styled";

import { Game } from "./components/Game/Game";

import wallpaperClouds from "./assets/wallpaper.png";

LogRocket.init('f1gdzh/minesweeper-blkl4');

export const App = () => {
  return (
    <Provider store={store}>
      <AppContainer style={{ backgroundImage: `url(${wallpaperClouds})` }}>
        <GlobalStyle />
        <Game />
      </AppContainer>
    </Provider>
  );
};
