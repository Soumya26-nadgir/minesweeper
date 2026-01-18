import clsx from "clsx";
import type { MouseEvent } from "react";
import { CELL_NUMBERS_COLORS } from "../constants";
import bomb from "../../public/icons/bomb.svg";
import type { GameCell } from "../types";

interface CellProps {
  cell: GameCell;
  onClick: () => void;
  onContextMenu: (e: MouseEvent<HTMLDivElement>) => void;
}

const Cell = ({ cell, onClick, onContextMenu }: CellProps) => {
  return (
    <div
      className={clsx(
        "cell",
        typeof cell.value === "number" && CELL_NUMBERS_COLORS[cell.value],
        cell.isOpened && "opened",
        cell.isFlagged && "flagged",
      )}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      {cell.isOpened && typeof cell.value === "number" && cell.value}
      {cell.isOpened && cell.value === "mine" && (
        <img src={bomb} alt="bomb" className="icon bomb-icon" />
      )}
      {!cell.isOpened && cell.isFlagged && <div className="flag">🚩</div>}
    </div>
  );
};

export default Cell;
