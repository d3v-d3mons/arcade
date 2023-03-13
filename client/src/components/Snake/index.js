import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
import "./snake.css";
import randomCords from "../../utils/snake";

//figure out how to dynamically size the grid at a later time
const board_size = 10;
let snakey_pos = [45];
const initPos = 44;

const gameGrid = (board_size) => {
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

// const changeDirection = (e) => {
//      up: snakey_pos - 10;
//      down: snakey_pos + 10;
//      right: snakey_pos + 1;
//      left: snakey_pos - 1;
// }

// const moveSnakey = () => {
//     if(changeDirection.up) {

//     }
// }

export default function Board() {
    const getDirection = (e) => {
      if (e.keyCode === 38) {
        moveUp(e);
      }
      if (e.keyCode === 39) {
        moveRight(e);
      }
      // if(key === 'ArrowRight') return changeDirection.right;
      // if(key === 'ArrowLeft') return changeDirection.left;
    };
  document.onkeydown = getDirection;

  const getClass = (cellValue) => {
    if (cellValue === snakey_pos[0]) {
      return "snakeCell";
    } else {
      return "cell";
    }
  };
  const moveUp = () => {
    const snakeyValue = snakey_pos.find(Number);
    const newVal = snakeyValue - 10;
    snakey_pos.push(newVal);
    snakey_pos.shift();
    setSnake(snakey_pos);
    console.log(snakey_pos);
  };
  const moveRight = () => {
    const snakeyValue = snakey_pos.find(Number);
    const newVal = snakeyValue + 1;
    snakey_pos.push(newVal);
    snakey_pos.shift();
    setSnake(snakey_pos);
    console.log(snakey_pos);
  }
  const [board, setBoard] = useState(gameGrid(board_size));
  const [snake, setSnake] = useState(new Set([snakey_pos]));

  return (
    <div className="board">
      {board.map((row, rowId) => (
        <div key={rowId} className="row">
          {row.map((cellValue, cellId) => (
            <div key={cellId} className={getClass(cellValue)}>
              <p>{cellValue}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
