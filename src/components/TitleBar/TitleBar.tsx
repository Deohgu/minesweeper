import React from "react";

import {
  TitleBarWrapper,
  IconsWrapper,
  MineIcon,
  Title,
  WindowsIcons,
} from "./TitleBar.styled";

import mineImg from "../../assets/mine-icon.png";
import minimize from "../../assets/minimize-icon.png";
import enlarge from "../../assets/enlarge-icon.png";
import x from "../../assets/x-icon.png";

const TitleBar = () => {
  return (
    <TitleBarWrapper className={"handle"}>
      <IconsWrapper>
        <MineIcon src={mineImg} alt="Mine Icon" />
        <Title>Minesweeper</Title>
      </IconsWrapper>
      <IconsWrapper>
        <WindowsIcons src={minimize} alt="minimize" />
        <WindowsIcons src={enlarge} alt="enlarge" />
        <WindowsIcons src={x} alt="x" />
      </IconsWrapper>
    </TitleBarWrapper>
  );
};

export default TitleBar;
