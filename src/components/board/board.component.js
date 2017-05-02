import React from 'react'
import PropTypes from 'prop-types'

import {Square} from '../square/square.component.js'

const renderSquare = (squares, onClick, i, step, player) => (
    <Square 
      onClick={() => onClick(step, i, player)}
      value={squares[i]} 
    />
)

const Board = ({squares, onClick, step, player}) => (
  <div>
    <div className="board-row">
      {renderSquare(squares, onClick, 0, step, player)}
      {renderSquare(squares, onClick, 1, step, player)}
      {renderSquare(squares, onClick, 2, step, player)}
    </div>
    <div className="board-row">
      {renderSquare(squares, onClick, 3, step, player)}
      {renderSquare(squares, onClick, 4, step, player)}
      {renderSquare(squares, onClick, 5, step, player)}
    </div>
    <div className="board-row">
      {renderSquare(squares, onClick, 6, step, player)}
      {renderSquare(squares, onClick, 7, step, player)}
      {renderSquare(squares, onClick, 8, step, player)}
    </div>
  </div>
)

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Board