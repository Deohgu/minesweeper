import React from "react";

import { TitleBarWrapper, MineIcon, Title } from "./TitleBar.styled";

import mineImg from "../../assets/mine-icon.png";

const TitleBar = () => {
  return (
    <TitleBarWrapper>
      <MineIcon src={mineImg} alt="Mine Icon" />
      <Title>Minesweeper</Title>
    </TitleBarWrapper>
  );
};

export default TitleBar;
