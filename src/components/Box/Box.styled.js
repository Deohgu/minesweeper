import styled from "styled-components";

export const Wrapper = styled.div`
  // *Destructures* the received props from rest into the a variable that matches the name. No need for props.display
  display: ${({ display }) => (display ? display : "Flex")};

  align-items: ${({ alignItems }) => (alignItems ? alignItems : "initial")};

  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "start"};

  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};

  width: ${({ width }) => (width ? width : "initial")};

  height: ${({ height }) => (height ? height : "initial")};

  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "initial")};

  max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : "initial")};

  border: ${({ border }) => (border ? border : "initial")};

  margin: ${({ margin }) => (margin ? margin : "initial")};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};

  color: ${({ color }) => (color ? color : "inherit")};

  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "initial")};

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "initial"};
`;
