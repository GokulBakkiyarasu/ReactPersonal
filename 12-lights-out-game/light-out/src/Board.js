import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
  static defaultProps = {
    nRows: 5,
    nColumns: 5,
    chanceLightStartsOn: 0.25,
  };

  constructor(props) {
    super(props);

    // TODO: set initial state
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    board = Array.from({ length: this.props.nRows }, () =>
      Array.from({ length: this.props.nColumns }, () =>
        Math.random() < this.props.chanceLightStartsOn ? true : false
      )
    );
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { nColumns, nRows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < nColumns && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it
    flipCell(y, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);
    flipCell(y - 1, x);
    flipCell(y + 1, x);

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon = board.every((row) => row.every((cell) => !cell));

    this.setState({
      board,
      hasWon: hasWon,
    });
  }

  /** Render game board or winning message. */

  render() {
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    // make table board
    // TODO
    if (this.state.hasWon) {
      return (
        <div className="Board-title">
          <div className="neon-orange winner">You</div>
          <div className="neon-blue winner">Won!</div>
        </div>
      );
    }

    let tblBoard = [];
    for (let y = 0; y < this.props.nRows; y++) {
      let row = [];
      for (let x = 0; x < this.props.nColumns; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }

    return (
      <div>
        <div className="Board-title">
          <div className="neon-orange">Lights</div>
          <div className="neon-blue">Out</div>
        </div>
        <table className="Board">
          <tbody>{tblBoard}</tbody>
        </table>
      </div>
    );
  }
}

export default Board;
