import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";

const NUM_DICE = 5;
const NUM_ROLLS = 2;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from(
        { length: NUM_DICE },
        () => Math.floor(Math.random() * 6) + 1
      ),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
      rolling: false,
      totalScore: 0,
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this);
    this.animateRoll = this.animateRoll.bind(this);
    this.totalCalculator = this.totalCalculator.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  animateRoll() {
    this.setState({ rolling: true }, () => {
      setTimeout(this.roll, 1000);
    });
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.props.gameOver(this.state.scores);
    this.setState((st) => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      rolling: false,
    }));
  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft > 0 && !this.state.rolling) {
      this.setState((st) => ({
        locked: [
          ...st.locked.slice(0, idx),
          !st.locked[idx],
          ...st.locked.slice(idx + 1),
        ],
      }));
    }
  }

  totalCalculator() {
    this.setState((st) => ({
      totalScore: Object.values(st.scores)
        .map((sc) => (sc !== undefined ? sc : 0))
        .reduce((pre, cur) => pre + cur),
    }));
  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    if (this.state.scores[rulename] === undefined && !this.state.rolling) {
      this.setState((st) => ({
        scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
        rollsLeft: NUM_ROLLS + 1,
        locked: Array(NUM_DICE).fill(false),
      }));
      this.animateRoll();
      this.totalCalculator();
    }
  }

  handleClick() {
    this.props.resetGame();
  }
  render() {
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>

          <section className="Game-dice-section">
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              rolling={this.state.rolling}
            />
            <div className="Game-button-wrapper">
              <button
                className="Game-reroll"
                disabled={
                  this.state.locked.every((x) => x) ||
                  this.state.rollsLeft === 0 ||
                  this.state.rolling
                }
                onClick={this.animateRoll}
              >
                {this.state.rollsLeft} Rolls Left
              </button>
            </div>
          </section>
        </header>
        <ScoreTable
          doScore={this.doScore}
          scores={this.state.scores}
          total={this.state.totalScore}
        />
        {this.props.isGameOver ? (
          <button onClick={this.handleClick} className="restart-button">
            Reset Game!
          </button>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Game;
