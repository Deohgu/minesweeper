import styled from "styled-components";

export const GameStyled = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin: 20% auto;
  /* width: 100vw;
  height: 100vw; */
  max-width: 700px;
  max-height: 700px;

  @media (min-width: 800px) {
    margin: 5% auto;
  }
`;

export const ScoreBoard = styled.div`
  font-size: 25px;

  display: flex;
  width: 80vw;
  margin: 0 auto;
  border: 15px ridge lightgrey;
  border-bottom: none;
  padding: 8px 0;
  justify-content: center;
  background-color: hsl(0deg 0% 83%);
`;

export const Reset = styled.button`
  width: 35px;
  height: 35px;
  margin: 0;
  margin-right: 20px;
  /* border: 2px solid grey; */
  border: none;
  border-radius: 100%;
  box-shadow: inset -1px -1px 1px 1px grey;
`;

export const Paragraph = styled.p`
  /* width: 100px; */
  /* height: fit-content; */
  margin: 0;
`;

export const TimerParagraph = styled.p`
  margin: 0;
  margin-right: 20px;
`;

export const GameStatus = styled.div`
  position: absolute;
  /* 80 = size of board, 8 size of grid, 7 not sure but it works*/
  top: calc(80vw / 8 * 7);
  /* left: calc(50vw); */
  width: fit-content;
  background-color: yellow;
`;
