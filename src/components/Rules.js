import styled from "styled-components";

export default function Rules() {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on Dice</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then 2 point will be dedcuted</p>
      </div>
    </RulesContainer>
  );
}

const RulesContainer = styled.div`
  background-color: #fbf1f1;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 40px;
  border-radius: 10px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .text {
    margin-top: 24px;
  }
`;
