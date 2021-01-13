import React from "react";

import { Wrapper } from "./Box.styled";

// Reading this.
// https://medium.com/javascript-in-plain-english/how-to-build-reusable-layouts-in-react-js-daf8adcbca79

export const Box = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
