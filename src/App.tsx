import React, { useState } from "react";
import Header from "./components/Header";
import StartScreen from "./components/StartScreen";
import JankenGame from "./components/JankenGame";
import "./styles.css";

const App: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  return (
    <div className="App">
      <Header />
      {gameStarted ? (
        <JankenGame />
      ) : (
        <StartScreen onStart={() => setGameStarted(true)} />
      )}
    </div>
  );
};

export default App;
