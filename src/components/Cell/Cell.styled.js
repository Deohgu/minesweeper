import styled from "styled-components";

export const CellStyled = styled.div`
  /* Have it modular, don't hard code the 8 or the 4. */
  width: calc((100% / 8) - 4px);
  height: calc((100% / 8) - 4px);
  background-color: lightgrey;
  margin: 2px;
`;
