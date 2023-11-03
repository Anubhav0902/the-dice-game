import React from "react";
import styled from "styled-components";

export default function TotalScore(props) {
  return (
    <ScoreContainer>
      <h1 style={{ color: props.checkBg() ? "white" : "black" }}>{props.score}</h1>
      <p style={{ color: props.checkBg() ? "white" : "black" }}>Total Score</p>
    </ScoreContainer>
  );
}

const ScoreContainer = styled.div`
  max-width: 200px;
  /* background-color: grey; */
  text-align: center;
  h1 {
    font-size: 90px;
    line-height: 90px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
