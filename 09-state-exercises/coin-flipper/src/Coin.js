import { Component } from "react";
import head from "./head.png";
import tail from "./tail.png";

class Coin extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.img === 2 ? head : tail} alt="coin-face"></img>
      </div>
    );
  }
}

export default Coin;
