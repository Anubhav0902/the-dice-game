
import styled from "styled-components";

export default function RollDice(props) {
  return (
    <DiceContainer>
      <div className="dice" onClick={props.roleDice}>
        <img src={`/images/dice/dice_${props.currentDice}.png`} style={{ width: "180px", height: "180px" }} alt="Current dice"/>
      </div>
      <p style={{ color: props.checkBg() ? "white" : "black" }}>Click the Dice to Roll!!</p>
    </DiceContainer>
  );
}

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
