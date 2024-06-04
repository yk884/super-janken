import React, { useState, useEffect } from "react";
import "../styles.css";

const choices = ["rock", "paper", "scissors"];
const images: { [key: string]: string } = {
  rock: "/assets/rock.png",
  paper: "/assets/paper.png",
  scissors: "/assets/scissors.png",
};

const JankenGame: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState<string | null>(null);
  const [computerChoice, setComputerChoice] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);

  useEffect(() => {
    if (playerChoice) {
      setTimeout(() => {
        determineWinner();
      }, 1000);
    }
  }, [playerChoice]);

  const determineWinner = () => {
    if (!playerChoice) return;

    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);

    if (playerChoice === randomChoice) {
      setResult("あいこ！");
    } else if (
      (playerChoice === "rock" && randomChoice === "scissors") ||
      (playerChoice === "scissors" && randomChoice === "paper") ||
      (playerChoice === "paper" && randomChoice === "rock")
    ) {
      setResult("あなたの勝ち!");
      setPlayerScore(playerScore + 1);
    } else {
      setResult("コンピューターの勝ち!");
      setComputerScore(computerScore + 1);
    }

    setPlayerChoice(null);
  };

  return (
    <div className="game-container">
      <div className="scores">
        <p>プレイヤー: {playerScore}</p>
        <p>コンピューター: {computerScore}</p>
      </div>
      <div className="choices">
        {choices.map((choice) => (
          <img
            key={choice}
            src={images[choice]}
            alt={choice}
            className="choice-image"
            onClick={() => setPlayerChoice(choice)}
          />
        ))}
      </div>
      <div className="result">
        <p>{result}</p>
      </div>
      {computerChoice && (
        <div className="computer-choice">
          <p>コンピューター</p>
          <img
            src={images[computerChoice]}
            alt={computerChoice}
            className="choice-image"
          />
        </div>
      )}
    </div>
  );
};

export default JankenGame;
