import { useEffect, useState } from "react";
import "./gameOverOverlay.css";

const PUNS = [
  "Aww, you lost! Better luck next mine!",
  "That was a blast! Wanna try again?",
  "You're the bomb... but not in a good way.",
  "Mind your step next time!",
  "Explosive personality, huh?",
  "Don't blow it next time!",
  "Boom! Goes the dynamite.",
  "Rough day at the office?",
  "Aww snap! You triggered it.",
  "Game over! Don't explode with rage.",
];

interface GameOverOverlayProps {
  isVisible: boolean;
  onRestart: () => void;
}

const GameOverOverlay = ({ isVisible, onRestart }: GameOverOverlayProps) => {
  const [show, setShow] = useState(false);
  const [pun, setPun] = useState("");

  useEffect(() => {
    if (isVisible) {
      // Pick a random pun
      setPun(PUNS[Math.floor(Math.random() * PUNS.length)]);

      // Delay showing the overlay to let the explosion happen first
      const timer = setTimeout(() => {
        setShow(true);
      }, 1500); // 1.5 seconds delay
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [isVisible]);

  if (!show) return null;

  return (
    <div className="game-over-overlay">
      <div className="game-over-content">
        <h2>Game Over</h2>
        <p>{pun}</p>
        <button onClick={onRestart}>Try Again</button>
      </div>
    </div>
  );
};

export default GameOverOverlay;
