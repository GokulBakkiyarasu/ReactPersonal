import { Component } from "react";
import Box from "./Box";

class ColorBoxes extends Component {
  static defaultProps = {
    numBoxes: 16,
  };
  render() {
    var boxArray = Array.from({ length: this.props.numBoxes });
    return (
      <div className="flex">
        {boxArray.map(() => (
          <Box />
        ))}
      </div>
    );
  }
}

export default ColorBoxes;
