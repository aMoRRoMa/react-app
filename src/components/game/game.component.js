import React from 'react'

import {Board} from '../board/board.component.js'

const Game = ({squares, onSquareClick, status, step, player}) => (
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
    </div>
  </div>
)

export default Game

// export class Game extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       stepNumber: 0,
//       history: [{
//         squares: Array(9).fill(null)
//       }],
//       xIsNext: true
//     };
//   }

//   render() {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const winner = calculateWinner(current.squares);

//     let status;
//     if (winner) {
//       status = 'Winner: ' + winner;
//     } else {
//       status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
//     }

//     const moves = history.map((step, move) => {
//       const desc = move ? 'Move #' + move : 'Game start'
//       return (
//         <li key={move}>
//           <a href="#" onClick={() => this.jumpTo(move)}>{desc}</a>
//         </li>
//       );
//     });

//     return (
//       <div className="game">
//         <div className="game-board">
//           <Board 
//             squares={current.squares}
//             onClick={(i) => this.handleClick(i)}
//           />
//         </div>
//         <div className="game-info">
//           <div>{status}</div>
//           <ol>{moves}</ol>
//         </div>
//       </div>
//     );
//   }

//   handleClick(i) {
//     const history = this.state.history;
//     const current = history[this.state.stepNumber];
//     const squares = current.squares.slice();
//     if (calculateWinner(squares) || squares[i]) {
//       return;
//     }
//     squares[i] = this.state.xIsNext ? 'X' : 'O';

//     this.setState({
//       stepNumber: history.length,
//       history: history.concat([{
//         squares: squares
//       }]),
//       xIsNext: !this.state.xIsNext,
//     });

//   }

//   jumpTo(step) {

//     this.setState({
//       stepNumber: step,
//       xIsNext: (step % 2) ? false : true,
//     });

//   }

// }