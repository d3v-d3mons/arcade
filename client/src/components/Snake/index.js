import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import "./snake.css";
import randomCords from "../../utils/snake";

//figure out how to dynamically size the grid at a later time
const board_size = 10;

const gameGrid = board_size => {
  let count = 1;
  const newBoard = [];
  for (let i = 0; i < board_size; i++) {
    const newRow = [];
    for (let j = 0; j < board_size; j++) {
      newRow.push(count++);
    }
    newBoard.push(newRow);
  }
  return newBoard;
};

export default function Board() {
  
  const [board, setBoard] = useState(gameGrid(board_size));
  const [snake, setSnake] = useState(new Set([44]));

  return (
    <div className="board">
      {board.map((row, rowId) => (
        <div key={rowId} className="row">
          {row.map((cellValue, cellId) => (
            <div
              key={cellId}
              className={snake.has(cellValue) ? "snakeCell" : "cell"}
            >
              <p>{cellValue}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
