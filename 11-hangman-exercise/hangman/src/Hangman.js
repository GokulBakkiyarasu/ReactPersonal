import React, { Component } from "react";
import "./Hangman.css";
import { randomWord } from "./words";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import loss from "./lost.gif";
import victory from "./victory.gif";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState((st) => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        hidden={
          this.state.nWrong === this.props.maxWrong ||
          this.guessedWord().join("") === this.state.answer
            ? true
            : false
        }
      >
        {ltr}
      </button>
    ));
  }

  handleReset() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord() });
  }

  /** render: render game */
  render() {
    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img
          src={this.props.images[this.state.nWrong]}
          alt={this.state.nWrong + "/" + this.props.maxWrong}
        />
        <p className="Hangman-tries">Incorrect Guesses: {this.state.nWrong}</p>
        <p className="Hangman-word">
          {this.state.nWrong === this.props.maxWrong
            ? this.state.answer
            : this.guessedWord()}
        </p>
        <p className="Hangman-btns">
          {this.generateButtons()}
          {this.state.nWrong === this.props.maxWrong ? (
            <div>
              <img src={loss} alt="losing" style={{ height: "100px" }} />
              <p style={{ marginTop: "0px" }}>You Lose</p>
            </div>
          ) : (
            ""
          )}
          {this.guessedWord().join("") === this.state.answer ? (
            <div>
              <img src={victory} alt="victory" style={{ height: "100px" }} />
              <p style={{ marginTop: "0px" }}>You Win</p>
            </div>
          ) : (
            ""
          )}
        </p>
        <button className="reset" onClick={this.handleReset}>
          Reset?
        </button>
      </div>
    );
  }
}

export default Hangman;
