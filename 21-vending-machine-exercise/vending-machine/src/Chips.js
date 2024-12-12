import { Component } from "react";
import { Link } from "react-router-dom";
import chips from "./Chips.png";
import "./Chips.css";

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((curState) => ({ bags: curState.bags + 1 }));
  }

  render() {
    return (
      <div className="Chips">
        <img src={chips} alt="chips-packet" />
        <div className="message">
          <h4>
            {this.props.message}:{this.state.bags}
          </h4>
          <button onClick={this.handleClick}>More</button>
          <Link to="/">Go Back</Link>
        </div>
        <img src={chips} alt="chips-packet" />
      </div>
    );
  }
}

export default Chips;
