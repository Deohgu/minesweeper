import styled from "styled-components";

export const GameStyled = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin: 20% auto;
  width: 80vw;
  height: 80vw;
  max-width: 700px;
  max-height: 700px;

  @media (min-width: 800px) {
    margin: 5% auto;
  }
`;

export const ScoreBoard = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
`;

export const Reset = styled.button`
  margin: 0 10px;
`;

export const Paragraph = styled.p`
  /* width: 100px; */
  /* height: fit-content; */
  margin: 0 10px;
`;

export const TimerParagraph = styled.p`
  width: 100px;
  margin: 0 10px;
`;
