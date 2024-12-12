import React from "react";
import Die from "./Die";

class RollDice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 1,
      die2: 1,
      isRolling: false,
    };
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    // change the state of num1
    this.setState({
      // pick a random number and set it to die1
      die1: Math.floor(Math.random() * 6 + 1),

      // pick a random number and set it to die2
      die2: Math.floor(Math.random() * 6 + 1),

      // change the state of the dice to rolling
      isRolling: true,

      // wait one second and update isRolling back to false
    });

    setTimeout(() => this.setState({ isRolling: false }), 1000);
  }

  render() {
    let dice = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
    };

    return (
      <div className="dice-flex">
        <Die
          dieNum={`fas fa-dice-${dice[this.state.die1]}`}
          wobble={this.state.isRolling ? "wobble" : ""}
        />
        <Die
          dieNum={`fas fa-dice-${dice[this.state.die2]}`}
          wobble={this.state.isRolling ? "wobble" : ""}
        />
        <div className="button">
          <button onClick={this.rollDice} disabled={this.state.isRolling}>
            {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
