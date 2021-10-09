import styled from "styled-components";

import { Box } from "../Box";

export const ButtonContainer = styled(Box)`
  /* height: 10px; */
`;

export const Buttons = styled(Box)`
  font-size: 15px;
  padding: 5px;
  margin: 6px;
  margin-left: 0;

  &:hover {
    outline: 2px outset hsl(0deg 0% 92%);
  }

  &:active {
    outline: 2px inset hsl(0deg 0% 92%);
  }
`;
