import { Component } from "react";

class Box extends Component {
  static defaultProps = {
    colorList: [
      "#7C00FE",
      "#F9E400",
      "#FFAF00",
      "#F5004F",
      "#180161",
      "#4F1787",
      "#EB3678",
      "#FB773C",
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.colorList[Math.floor(Math.random() * 8)],
    };
    this.colorChange = this.colorChange.bind(this);
  }

  colorChange() {
    do {
      var newColor = this.props.colorList[Math.floor(Math.random() * 8)];
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div
        onClick={this.colorChange}
        style={{
          backgroundColor: this.state.color,
          height: "200px",
          width: "200px",
        }}
      ></div>
    );
  }
}
export default Box;
