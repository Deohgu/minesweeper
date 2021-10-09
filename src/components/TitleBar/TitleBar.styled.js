import styled from "styled-components";

import { Box } from "../Box";

export const TitleBarWrapper = styled(Box)`
  justify-content: space-between;
  color: white;
  padding: 5px;
  background-color: hsl(233, 98%, 33%);
`;

export const IconsWrapper = styled(Box)`
  align-items: center;
`;

export const MineIcon = styled.img`
  width: 18px;
  margin-right: 5px;
`;

export const WindowsIcons = styled.img`
  width: 17px;
  height: 17px;
  padding: 2px;
  border: 2px outset hsl(0deg 0% 92%);
  background-color: hsl(0deg 0% 74%);

  &:not(:last-child) {
    margin-right: 5px;
  }

  &:active {
    border: 2px inset hsl(0deg 0% 92%);
  }
`;

export const Title = styled.p``;
