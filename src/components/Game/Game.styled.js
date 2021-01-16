import styled from "styled-components";

import { Box } from "../Box";

export const GameBox = styled(Box)`
  flex-direction: column;
  width: 100vw;
  height: calc(100vw * 1.15);
  // 85% of its height. If changed here it needs to be changed in the child components (Scoreboard and board) as they have it hardcoded as 15% and 85%.
  max-width: calc(700px);
  max-height: calc(
    700px + 700px * 0.15
  ); // plus 15% in height of the total width for the scoreboard
  border: 10px outset hsl(0deg 0% 92%);
  background-color: hsl(0deg 0% 74%);
`;

export const ScoreBoardBox = styled(Box)`
  justify-content: space-between;

  align-items: center;
  font-size: clamp(3px, 9.4vw, calc((700px * 0.85) * 0.094));

  color: white;
  width: calc(100% - (100% * 0.06)); // amount added in margin
  height: 15%;
  padding: 0 3%;
  border: inset 10px hsl(0deg 0% 92%);
  margin: calc(85% * 0.03) calc(100% * 0.03) 0 calc(100% * 0.03); // to be equal to the board
  background-color: hsl(0, 0%, 75%);
`;
