import styled from "styled-components";

import { Box } from "../Box";

export const TitleBarWrapper = styled(Box)`
  justify-content: space-between;
  color: white;
  padding: 3px;
  background: linear-gradient(
    90deg,
    rgba(2, 21, 167, 1) 56%,
    rgba(67, 157, 241, 1) 97%
  );
`;

export const IconsWrapper = styled(Box)`
  align-items: center;
`;

export const MineIcon = styled.img`
  width: 18px;
  margin-right: 5px;
`;

export const WindowsIcons = styled.img`
  width: 18px;
  height: 18px;
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
