import styled from "styled-components";

export const BombsBox = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0.5%;
  border: inset 3px hsl(0 0% 92%);
  background-color: black;
  user-select: none;
`;

export const BombsImg = styled.img`
  height: calc(100% - 4px);
  margin: 0 2px;
  image-rendering: pixelated;
`;
