import { Component } from "react";
import { Link } from "react-router-dom";
import "./Sardines.css";

class Sardines extends Component {
  render() {
    return (
      <div className="Sardines">
        <div className="message">
          <h4>{this.props.message}</h4>
          <Link to="/">Go Back</Link>
        </div>
      </div>
    );
  }
}

export default Sardines;
