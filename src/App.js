import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import React, { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [Mode, setMode] = useState("light");

  function darkMode() {
    if (Mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
  }

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };

  return <>{isGameStarted ? <GamePlay mode={Mode} darkMode={darkMode} /> : <StartGame mode={Mode} darkMode={darkMode} toggle={toggleGamePlay} />}</>;
}

export default App;
