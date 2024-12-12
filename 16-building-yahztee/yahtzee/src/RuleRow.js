import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    return (
      <tr
        className={`RuleRow ${
          this.props.score !== undefined ? "RuleRow-disabled" : "RuleRow-active"
        }
        }`}
        onClick={this.props.doScore}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">
          {this.props.score !== undefined ? this.props.score : this.props.desc}
        </td>
      </tr>
    );
  }
}

export default RuleRow;
