import styled from "styled-components";

import { Box } from "../Box";

export const GameBox = styled(Box)`
  flex-direction: column;
  width: 100vw;
  height: calc(100vw * 1.15);
  // 85% of its height. If changed here it needs to be changed in the child components (Scoreboard and board) as they have it hardcoded as 15% and 85%.
  max-width: calc(700px * 0.85);
  max-height: calc(700px);
  border: 15px ridge lightgrey;
`;

export const ScoreBoardBox = styled(Box)`
  justify-content: space-between;
  font-size: clamp(3px, 9.4vw, calc((700px * 0.85) * 0.094));
  color: white;
  height: 15%;
  background-color: hsl(0deg 0% 55%);
`;

export const IconGroup = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  transform: translateY(15%);

  @media (min-width: calc(700px * 0.85)) {
    margin: 5px;
  }
`;
