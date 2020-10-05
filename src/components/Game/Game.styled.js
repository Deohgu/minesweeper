import styled from "styled-components";

export const GameStyled = styled.div`
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
  justify-content: space-between;

  font-size: 25px;
  font-weight: 400;
  color: white;

  width: 100%;
  height: 15%;
  /* margin: 0 auto; */
  /* border: 15px ridge lightgrey; */
  border-bottom: none;
  /* padding: 8px 0; */
  justify-content: center;
  background-color: hsl(0deg 0% 55%);
`;

export const Text = styled.div``;

export const TimerText = styled.div`
  width: 118px;
  margin-right: 20px;
`;

export const GameStatus = styled.div`
  font-size: 30px;
  position: absolute;
  /* 80 = size of board, 8 size of grid, 7 not sure but it works*/
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  background-color: yellow;
`;

export const Icons = styled.div`
  margin: 5px;
`;
