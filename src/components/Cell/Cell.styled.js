import styled from "styled-components";

export const CellStyled = styled.div`
  /* Have it modular, don't hard code the 8 or the 4. */
  display: flex;
  align-items: center;
  justify-content: center;

  width: calc((100% / ${(props) => props.gridWidth}) - 4px);
  height: calc((100% / ${(props) => props.gridWidth}) - 4px);
  background-color: lightgrey;
  margin: 2px;
`;
