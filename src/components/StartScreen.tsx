import React from "react";
import "../styles.css";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="start-screen">
      <div className="start-choices">
        <img src="/assets/rock.png" alt="rock" className="start-choice-image" />
        <img
          src="/assets/paper.png"
          alt="paper"
          className="start-choice-image"
        />
        <img
          src="/assets/scissors.png"
          alt="scissors"
          className="start-choice-image"
        />
      </div>
      <button className="start-button" onClick={onStart}>
        ゲームスタート
      </button>
    </div>
  );
};

export default StartScreen;
