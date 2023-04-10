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
  const buttonRef = useRef<HTMLDivElement>(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [buttonHeight, setButtonHeight] = useState<number | undefined>(0);

  useEffect(() => {
    setButtonHeight(buttonRef.current?.offsetHeight);
  }, []);

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
            <span style={{ textDecoration: "underline" }}>I</span>ntermediate
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
