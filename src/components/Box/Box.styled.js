import styled from "styled-components";

export const Wrapper = styled.div`
  // *Destructures* the received props from rest into the a variable that matches the name. No need for props.display
  display: ${({ display }) => (display ? display : "Flex")};

  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "start"};

  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};

  width: ${({ width }) => (width ? width : "100%")};

  height: ${({ height }) => (height ? height : "fit-content")};

  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "100%")};

  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "fit-content")};

  border: ${({ border }) => (border ? border : "initial")};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};

  color: ${({ color }) => (color ? color : "inherit")};

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "inherit"};
`;
