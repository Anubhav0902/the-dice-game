import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import Rules from "./Rules";

export default function GamePlay(props) {
  const [score, setScore] = useState(0);

  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);

  const [error, setError] = useState("");

  const [showrules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  function roleDice() {
    if (!selectedNumber) {
      setError("You have not selected any number");
      setTimeout(() => {
        setError("");
      }, 1500);
      return;
    }

    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  }

  function resetScore() {
    setScore(0);
  }

  function checkBg() {
    return props.mode === "dark"; 
  }

  const [isHovered1, setIsHovered1] = useState(false);

  const buttonStyle1 = {
    backgroundColor: isHovered1 ? (props.mode === "dark" ? "white" : "black") : props.mode === "dark" ? "black" : "white",
    color: isHovered1 ? (props.mode === "dark" ? "black" : "white") : props.mode === "dark" ? "white" : "black",
  };

  const [isHovered2, setIsHovered2] = useState(false);

  const buttonStyle2 = {
    backgroundColor: isHovered2 ? (props.mode === "dark" ? "white" : "black") : props.mode === "dark" ? "black" : "white",
    color: isHovered2 ? (props.mode === "dark" ? "black" : "white") : props.mode === "dark" ? "white" : "black",
  };

  return (
    <Main>
      <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} mx-3 my-3`}>
        <input className="form-check-input" type="checkbox" onClick={props.darkMode} role="switch" id="flexSwitchCheckDefault" checked={props.mode === "dark"} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Dark Mode
        </label>
      </div>

      <div className="top_section">
        <TotalScore score={score} checkBg={checkBg} />
        <NumberSelector error={error} checkBg={checkBg} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice checkBg={checkBg} currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <Button style={buttonStyle1} onMouseOver={() => setIsHovered1(true)} onMouseOut={() => setIsHovered1(false)} className="reset" onClick={resetScore}>
          Reset
        </Button>
        <Button style={buttonStyle2} onMouseOver={() => setIsHovered2(true)} onMouseOut={() => setIsHovered2(false)} className="result" onClick={() => setShowRules((prev) => !prev)}>
          {showrules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showrules && <Rules />}
    </Main>
  );
}

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s background ease-in;
`;

const Main = styled.div`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;

    /* .result {
      background: #000000;
      color: white;
      border: 3px solid transparent;
    } */

    .reset,
    .result {
      background-color: white;
      border: 3px solid black;
      color: black;
    }

    .reset:hover {
      background-color: black;
      border: 3px solid transparent;
      color: white;
      transition: 0.3s background ease-in;
    }

    .result:hover {
      background-color: white;
      border: 3px solid black;
      color: black;
      transition: 0.3s background ease-in;
    }
  }
`;
