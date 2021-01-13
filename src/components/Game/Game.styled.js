import styled from "styled-components";

export const GameStyled = styled.div`
  position: relative;
  /* margin: 20% auto; */
  border: 15px ridge lightgrey;
  // 85% of its height. If changed here it needs to be changed in the child components (Scoreboard and board) as they have it hardcoded as 15% and 85%.
  width: calc(80vh * 0.85);
  height: 80vh;
  max-width: calc(700px * 0.85);
  max-height: calc(700px);

  @media (max-width: calc(700px * 0.85)) {
    width: 100vw;
    // 15% larger than the width to maintain the ratio
    height: calc(100vw * 1.15);
    /* margin: 5% auto; */
  }
`;

export const ScoreBoard = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: calc(8vw);
  font-weight: 400;
  color: white;

  /* width: 100%; */
  height: 15%;
  background-color: hsl(0deg 0% 55%);
  @media (min-width: 800px) {
    font-size: 63.68px;
  }
`;

export const TimerText = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: auto;
  /* width: calc(100% + 20%); */
  width: 25vw;

  @media (min-width: 800px) {
    width: 200px;
  }
`;

export const GameStatus = styled.div`
  font-size: 30px;
  position: absolute;
  top: calc(50% + 30px + 16px);
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: yellow;
`;

export const IconGroup = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  transform: translateY(15%);

  @media (min-width: 330px) {
    margin: 5px;
  }
`;
