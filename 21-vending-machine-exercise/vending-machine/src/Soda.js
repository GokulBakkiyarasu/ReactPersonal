import { Component } from "react";
import soda from "./Soda.png";
import { Link } from "react-router-dom";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <img src={soda} alt="can-img" />
        <div className="message">
          <h4>{this.props.message}</h4>
          <Link to="/">Go Back</Link>
        </div>
        <img src={soda} alt="can-img" />
      </div>
    );
  }
}

export default Soda;
