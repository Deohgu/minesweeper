import styled from "styled-components";

import { Box } from "../Box/Box";

type CellStyledTypes = {
  gridColumns: number;
  pressed: boolean;
};

export const CellStyled = styled(Box)<CellStyledTypes>`
  font-size: 25px;
  font-weight: 600;

  align-items: center;
  justify-content: center;

  width: calc((100% / ${({ gridColumns }) => gridColumns}));
  height: calc((100% / ${({ gridColumns }) => gridColumns}));
  background-color: ${({ pressed }) =>
    pressed
      ? "hsl(0deg 0% 74%)"
      : "hsl(0deg 0% 74%)"}; // original minesweeper doesn't seem to change.

  border: ${({ pressed }) =>
    pressed ? "solid 2px hsl(0, 0%, 60%)" : "outset 4px hsl(0deg 0% 92%)"};
`;

export const Icons = styled.img`
  image-rendering: pixelated;
  height: 80%;
  user-select: none;
`;
