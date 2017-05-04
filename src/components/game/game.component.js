import React from 'react'

import Board from '../board/board.component.js'

const renderMoves = (moves, onJumpToClick) => {
  return moves.map((step) => {
    return (
      <li key={step.move}>
        <a href="#" onClick={() => onJumpToClick(step.move)}>{step.desc}</a>
      </li>
    );
  });
}

const Game = ({moves, onJumpToClick, squares, onSquareClick, status, step, player}) => ( 
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
      <ol>{renderMoves(moves, onJumpToClick)}</ol>
    </div>
  </div>
)

export default Game