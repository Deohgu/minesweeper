import styled from "styled-components";

import { Box } from "../Box";

export const GameBox = styled(Box)`
  flex-direction: column;
  width: 100vw;
  height: calc(100vw * 1.15);
  // 85% of its height. If changed here it needs to be changed in the child components (Scoreboard and board) as they have it hardcoded as 15% and 85%.
  max-width: calc(700px * 0.85);
  // It wasn't working perfectly with 700px, not sure why. -14px being the size of the border ...
  max-height: calc(686px);
  border: 15px ridge lightgrey;
`;

export const ScoreBoardBox = styled(Box)`
  justify-content: space-between;
  align-items: center;
  font-size: clamp(3px, 9.4vw, calc((700px * 0.85) * 0.094));
  color: white;
  width: 100%;
  height: 15%;
  padding: 0 3%;
  background-color: hsl(0deg 0% 55%);
`;
