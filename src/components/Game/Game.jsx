import React, { useState } from "react";

import { Board } from "./../index";

export const Game = () => {
  const [size, setSize] = useState(64);

  return (
    <>
      <Board size={size} />
    </>
  );
};
