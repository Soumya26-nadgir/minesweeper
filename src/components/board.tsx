import type { MouseEvent } from "react";
import type { TBoard, TLevel } from "../types";
import Cell from "./cell";

interface BoardProps {
  gameBoard: TBoard;
  handleCellLeftClick: (row: number, col: number) => void;
  handleCellRightClick: (
    e: MouseEvent<HTMLDivElement>,
    row: number,
    col: number,
  ) => void;
  level: TLevel;
}

const Board = ({
  gameBoard,
  handleCellLeftClick,
  handleCellRightClick,
}: BoardProps) => {
  return (
    <div className="board">
      {gameBoard.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              cell={cell}
              onClick={() => handleCellLeftClick(rowIndex, colIndex)}
              onContextMenu={(e) => handleCellRightClick(e, rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
