import styled from "styled-components";

import { Box } from "../Box";

export const BombsBox = styled(Box)`
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: black;
  padding: 0.5%;
`;

export const BombsImg = styled.img`
  height: calc(100% - 4px);
  margin: 0 2px;
  image-rendering: pixelated;
`;
