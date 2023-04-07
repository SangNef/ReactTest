import React, { useState } from 'react';
import Board from './Board';
import './GameStyle.css';
import { calculateWinner } from '../../helper';

const Game = () => {
    // const [board, setBoard] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsnext] = useState(true);
    const [state, setState] = useState({
      board: Array(9).fill(null),
      xIsNext: true,
    });
    const winner = calculateWinner(state.board);
    const handleClick = (index) => {
        const boardCopy = [...state.board];
        if (winner || boardCopy[index]) return;
        boardCopy[index] = state.board ? 'X' : 'O';
        setState({
          ...state, //clone state ban đầu
          board: boardCopy,
          xIsNext: !state.xIsNext,
        })
        // setBoard(boardCopy);
        // setXIsnext(!state.xIsNext);
      };
      const handleResetGame = () => {
        // setBoard(Array(9).fill(null));
        // setXIsnext(true);
    }
    
        console.log(state.xIsNext);
    return (
      <div>
        <Board cells={state.board} onClick={handleClick}></Board>
        {!winner && <h2>{state.xIsNext ? "X" : "O"} Turn</h2>}
        {winner && <h2>Winner is {winner}</h2>}
        <button className="game-reset" onClick={handleResetGame}>
          Reset Game
        </button>
      </div>
    );
};

export default Game;