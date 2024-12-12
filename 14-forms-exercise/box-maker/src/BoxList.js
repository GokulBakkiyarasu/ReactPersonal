import { Component } from "react";
import "./BoxList.css";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
    this.addBox = this.addBox.bind(this);
    this.deleteBox = this.deleteBox.bind(this);
  }

  addBox(newBox) {
    this.setState((curState) => ({
      boxes: [...curState.boxes, newBox],
    }));
  }

  deleteBox(box) {
    this.setState((curState) => ({
      boxes: curState.boxes.filter((b) => b.key !== box.key),
    }));
  }

  render() {
    return (
      <>
        <NewBoxForm addBox={this.addBox} />
        <ul>
          {this.state.boxes.map((box) => (
            <li key={box.key}>
              <Box
                width={`${box.width}px`}
                height={`${box.height}px`}
                color={`${box.color}`}
                uniqueKey={box.key}
                deleteBox={this.deleteBox}
              />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BoxList;
