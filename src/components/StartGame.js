/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styled from "styled-components";

export default function StartGame(props) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? (props.mode === "dark" ? "white" : "black") : props.mode === "dark" ? "black" : "white",
    color: isHovered ? (props.mode === "dark" ? "black" : "white") : props.mode === "dark" ? "white" : "black",
  };

  return (
    <>
      <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"} mx-3 my-3`}>
        <input className="form-check-input" type="checkbox" onClick={props.darkMode} role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Dark Mode
        </label>
      </div>

      <Container>
        <div>
          <img src="/images/dices.png" />
        </div>
        <div className="content">
          <h1 style={{ color: props.mode === "dark" ? "white" : "#212529" }}>The Dice Game</h1>
          <Button style={buttonStyle} onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)} onClick={props.toggle}>
            <b>Play Now</b>
          </Button>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  height: 90vh;
  margin: 0 auto;
  align-items: center;

  .content h1 {
    font-size: 85px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 3px solid black;
  cursor: pointer;
  transition: 0.5s background ease-in;

  &:hover {
    background-color: white;
    border: 3px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
