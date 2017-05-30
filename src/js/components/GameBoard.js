import React, { Component } from 'react';
import '../.././css/App.css';

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {
          id: 1,
          name: "Player One",
          symbol: "X"
        },
        {
          id: 2,
          name: "Player Two",
          symbol: "O"
        }
      ],
      board: ["", "", "", "", "", "", "", "", ""],
      turn: 1
    }
    this._toggleSymbol = this._toggleSymbol.bind(this);
  }
  _toggleSymbol(e) {
    e.preventDefault();
    const index = e.target.dataset.square;
    console.log(this.state.board[index]);
    if (this.state.board[index] === "") {
      let turn = this.state.turn;

      const symbol = this.state.players[turn-1].symbol;
      const updatedBoard = this.state.board;
      updatedBoard.splice(index, 1, symbol);
      if (turn === 1) {
        turn = 2
      } else {
        turn = 1
      }
      console.log(updatedBoard);
      this.setState({
        board: updatedBoard,
        turn: turn
      })
    }

  }
  render() {
    return (
      <div className="game-board">
        {this.state.board.map((square, i) => {
          return <div className="square" data-square={i} key={i} onClick={this._toggleSymbol}>
            {square}
          </div>
        })
      }
      </div>
    );
  }
}

export default GameBoard;
