import styled from "styled-components";

export const GameStyled = styled.div`
  position: relative;
  margin: 20% auto;
  border: 15px ridge lightgrey;
  width: 80vw;
  height: calc(80vw + 12vw);
  max-width: 700px;
  max-height: 700px;

  @media (min-width: 800px) {
    margin: 5% auto;
  }
`;

export const ScoreBoard = styled.div`
  display: flex;
  flex-grow: 0;
  justify-content: space-between;

  font-size: calc(8vw);
  font-weight: 400;
  color: white;

  width: 100%;
  height: 15%;
  background-color: hsl(0deg 0% 55%);
  @media (min-width: 800px) {
    font-size: 63.68px;
  }
`;

export const TimerText = styled.div`
  margin: auto;
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
  /* margin-right: 10px; */
`;
