import { Component } from "react";
import Coin from "./Coin";

class CoinFlipper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: {
        total: 0,
        head: 0,
        tail: 0,
      },
      side: 0,
    };
    this.flipCoin = this.flipCoin.bind(this);
  }

  randomSide() {
    this.setState((curState) => ({
      side: (curState.side = Math.floor(Math.random() * 2) + 1),
    }));
  }

  iterator() {
    this.setState((curState) => {
      var newTail =
        curState.side === 1 ? curState.count.tail + 1 : curState.count.tail;
      var newHead =
        curState.side !== 1 ? curState.count.head + 1 : curState.count.head;

      return {
        count: {
          total: curState.count.total + 1,
          head: newHead,
          tail: newTail,
        },
      };
    });
  }

  flipCoin() {
    this.randomSide();
    this.iterator();
  }

  render() {
    return (
      <div className="flex">
        <h1>Let's flip the coin.</h1>
        {this.state.side ? <Coin img={this.state.side} /> : ""}
        <button onClick={this.flipCoin}>Flip Coin!</button>
        <p>
          Out of {this.state.count.total} flips, there have been{" "}
          {this.state.count.head} heads and {this.state.count.tail} tails.
        </p>
      </div>
    );
  }
}

export default CoinFlipper;
