import styled from "styled-components";

type WindowMenuTypes = {
  toggleMenu: boolean;
  buttonHeight: number;
};

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

export const WindowMenu = styled.div<WindowMenuTypes>`
  visibility: ${({ toggleMenu }) => (toggleMenu ? "visible" : "hidden")};
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 2px 0;
  transform: translateY(${({ buttonHeight }) => buttonHeight}px);
  background-color: hsl(0deg 0% 74%);
  outline: 2px outset hsl(0deg 0% 92%);
`;

export const WindowMenuSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WindowMenuText = styled.p`
  margin: 2px;
  padding: 3px;

  &:hover {
    color: white;
    background-color: rgb(2, 21, 167);
  }
`;

export const WindowMenuDivisor = styled.div`
  margin: 0 5px;
  border: 2px inset hsl(0deg 0% 92%);
`;
