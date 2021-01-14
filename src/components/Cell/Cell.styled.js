import styled from "styled-components";

import { Box } from "./../Box";

const margin = 1;

export const CellStyled = styled(Box)`
  font-size: 25px;
  font-weight: 600;

  align-items: center;
  justify-content: center;

  width: calc((100% / ${(props) => props.gridWidth}) - ${margin * 2}px);
  height: calc((100% / ${(props) => props.gridWidth}) - ${margin * 2}px);
  background-color: ${(props) =>
    props.pressed ? "hsl(0deg 0% 77%)" : "hsl(0deg 0% 74%)"};
  margin: ${margin}px;

  box-shadow: ${(props) =>
    props.pressed
      ? "inset 2px 2px 1px 1px hsl(0deg 0% 40%)"
      : "inset -2px -2px 1px 1px hsl(0deg 0% 40%)"};
`;
