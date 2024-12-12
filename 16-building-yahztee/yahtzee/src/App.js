import React, { Component } from "react";
import Game from "./Game";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGameOver: false,
      resetKey: 0,
    };
    this.gameOver = this.gameOver.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  gameOver(scores) {
    this.setState({
      isGameOver: Object.values(scores).includes(undefined) ? false : true,
    });
  }

  resetGame() {
    this.setState((st) => ({
      resetKey: st.resetKey + 1,
      isGameOver: false,
    }));
  }

  render() {
    return (
      <div className="App">
        <Game
          gameOver={this.gameOver}
          key={this.state.resetKey}
          resetGame={this.resetGame}
          isGameOver={this.state.isGameOver}
        />
      </div>
    );
  }
}

export default App;
