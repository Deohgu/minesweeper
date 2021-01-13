import styled from "styled-components";

export const Wrapper = styled.div`
  // *Destructures* the received props from rest into the a variable that matches the name. No need for props.display
  display: ${({ display }) => (display ? display : "inherit")};

  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "inherit"};

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "inherit")};

  color: ${({ color }) => (color ? color : "inherit")};

  background-color: ${({ backgroundColor }) =>
    backgroundColor ? backgroundColor : "inherit"};

  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "inherit"};
`;
