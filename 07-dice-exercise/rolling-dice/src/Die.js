import React from "react";

class Die extends React.Component {
  render() {
    return (
      <div>
        <i className={`${this.props.dieNum} icon ${this.props.wobble}`}></i>
      </div>
    );
  }
}

export default Die;
