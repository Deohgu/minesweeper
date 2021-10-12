import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  margin-left: 5px;
`;

export const Buttons = styled.div`
  display: flex;
  font-size: 15px;
  padding: 5px;
  margin: 2px;
  margin-left: 0;

  &:hover {
    outline: 2px outset hsl(0deg 0% 92%);
  }

  &:active {
    outline: 2px inset hsl(0deg 0% 92%);
  }
`;
