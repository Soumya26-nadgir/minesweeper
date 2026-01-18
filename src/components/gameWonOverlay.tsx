import { useEffect, useState } from "react";
import "./gameWonOverlay.css";

const WIN_MSGS = [
  "You're the bomb! (Wait, no, you avoided them!)",
  "Swept away by your skills!",
  "You really nailed it!",
  "Mine-blowing performance!",
  "Clean sweep! You're a pro.",
  "You conquered the field!",
  "Victory is yours!",
  "Not a single scratch on you.",
  "You're a minesweeper master!",
  "Boom! ...Just kidding, you won.",
];

interface GameWonOverlayProps {
  isVisible: boolean;
  onRestart: () => void;
  timeTaken: string;
}

const GameWonOverlay = ({
  isVisible,
  onRestart,
  timeTaken,
}: GameWonOverlayProps) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (isVisible) {
      setMsg(WIN_MSGS[Math.floor(Math.random() * WIN_MSGS.length)]);
      // Delay slightly less than game over since confetti starts immediately
      const timer = setTimeout(() => {
        setShow(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShow(false);
    }
  }, [isVisible]);

  if (!show) return null;

  return (
    <div className="game-won-overlay">
      <div className="game-won-content">
        <h2>You Won! 🎉</h2>
        <p className="win-msg">{msg}</p>
        <p className="time-stat">Time: {timeTaken}</p>
        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  );
};

export default GameWonOverlay;
