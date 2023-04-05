import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import { AppContainer, GlobalStyle } from "./App.styled";

import { Game } from "./components/Game/Game";

import wallpaperClouds from "./assets/wallpaper.png";

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
