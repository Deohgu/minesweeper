import styled from "styled-components";

import { Box } from "../Box/index";

export const TimerBox = styled(Box)`
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: black;
  padding: 0.5%;
`;

export const Counter = styled.img`
  height: calc(100% - 4px);
  margin: 0 2px;
  image-rendering: pixelated;
`;
