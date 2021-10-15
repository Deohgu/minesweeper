import React, { useState, useRef, useEffect } from "react";

import {
  ButtonContainer,
  Buttons,
  WindowMenu,
  WindowMenuSection,
  WindowMenuText,
  WindowMenuDivisor,
} from "./WindowButtons.styled";

const WindowButtons = () => {
  const buttonRef: any = useRef(null);
  const [toggleMenu, setToggleMenu] = useState(true);
  const [buttonHeight, setButtonHeight] = useState(0);

  useEffect(() => {
    setButtonHeight(buttonRef.current?.offsetHeight);
  }, []);

  console.log("buttonHeight", buttonHeight);

  return (
    <ButtonContainer>
      <Buttons onClick={() => setToggleMenu(!toggleMenu)} ref={buttonRef}>
        <span style={{ textDecoration: "underline" }}>G</span>ame
      </Buttons>
      <Buttons>
        <span style={{ textDecoration: "underline" }}>H</span>elp
      </Buttons>
      <WindowMenu toggleMenu={toggleMenu} buttonHeight={buttonHeight}>
        <WindowMenuSection>
          <WindowMenuText>
            <span style={{ textDecoration: "underline" }}>N</span>ew
          </WindowMenuText>
          <WindowMenuDivisor />
        </WindowMenuSection>
        <WindowMenuSection>
          <WindowMenuText>
            <span style={{ textDecoration: "underline" }}>B</span>eginner
          </WindowMenuText>
          <WindowMenuText>
            <span style={{ textDecoration: "underline" }}>I</span>ntermidiate
          </WindowMenuText>
          <WindowMenuText>
            <span style={{ textDecoration: "underline" }}>E</span>xpert
          </WindowMenuText>
          <WindowMenuText>
            <span style={{ textDecoration: "underline" }}>C</span>ustom
          </WindowMenuText>
          <WindowMenuDivisor />
        </WindowMenuSection>
        <WindowMenuSection>
          <WindowMenuText>
            <span style={{ textDecoration: "underline" }}>E</span>xit
          </WindowMenuText>
        </WindowMenuSection>
      </WindowMenu>
    </ButtonContainer>
  );
};

export default WindowButtons;
