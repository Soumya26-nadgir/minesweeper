import ReactConfetti from "react-confetti";
import "./App.css";
import Board from "./components/board";
import Header from "./components/header";
import SelectLevel from "./components/selectLevel";
import useMinesweeperGame from "./hooks/useMinesweeperGames";
import Explosion from "./components/explosion";
import clsx from "clsx";

import GameOverOverlay from "./components/gameOverOverlay";
import GameWonOverlay from "./components/gameWonOverlay";

function App() {
  const {
    level,
    changeLevel,
    gameBoard,
    minesLeft,
    timeDiff,
    startNewGame,
    restartGame,
    handleCellLeftClick,
    handleCellRightClick,
    isGameWin,
    isGameOver,
    isGameEnded,
  } = useMinesweeperGame();

  return (
    <>
      <div className={clsx("game", isGameOver && "shake-screen")}>
        <Header
          isGameWin={isGameWin}
          isGameOver={isGameOver}
          isGameEnded={isGameEnded}
          minesLeft={minesLeft}
          startNewGame={startNewGame}
          restartGame={restartGame}
          timeDiff={timeDiff}
        />
        <Board
          gameBoard={gameBoard}
          handleCellLeftClick={handleCellLeftClick}
          handleCellRightClick={handleCellRightClick}
          level={level}
        />
        <SelectLevel level={level} changeLevel={changeLevel} />
        {isGameWin && <ReactConfetti />}
      </div>
      {isGameOver && (
        <>
          <Explosion />
          <GameOverOverlay isVisible={isGameOver} onRestart={restartGame} />
        </>
      )}
      {isGameWin && (
        <GameWonOverlay
          isVisible={isGameWin}
          onRestart={restartGame}
          timeTaken={timeDiff}
        />
      )}
    </>
  );
}

export default App;
