import React from 'react'

import Board from '../board/board.component.js'

const renderMoves = (history, onJumpToClick) => {
  return history.map((step, move) => {
    const desc = move ? 'Move #' + move : 'Game start'
    return (
      <li key={move}>
        <a href="#" onClick={() => onJumpToClick(move)}>{desc}</a>
      </li>
    );
  });
}

const Game = ({history, onJumpToClick, squares, onSquareClick, status, step, player}) => ( 
  <div className="game">
    <div className="game-board">
      <Board 
        squares={squares}
        onClick={onSquareClick}
        step={step}
        player={player}
      />
    </div>
    <div className="game-info">
      <div>{status}</div>
      <ol>{renderMoves(history, onJumpToClick)}</ol>
    </div>
  </div>
)

export default Game