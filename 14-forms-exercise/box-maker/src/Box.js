import { Component } from "react";
import "./Box.css";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.deleteBox({
      width: this.props.width,
      height: this.props.height,
      backgroundColor: this.props.color,
      key: this.props.uniqueKey,
    });
  }
  render() {
    return (
      <>
        <div
          style={{
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.color,
          }}
        ></div>

        {
          <button onClick={this.handleClick} className="box-button">
            Delete
          </button>
        }
      </>
    );
  }
}

export default Box;
