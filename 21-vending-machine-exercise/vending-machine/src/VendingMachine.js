import { Component } from "react";
import "./VendingMachine.css";
import { Link } from "react-router-dom";

class VendingMachine extends Component {
  render() {
    return (
      <div className="content">
        <div className="content-intro">
          <h3>HELLO I AM A VENDING MACHINE. WHAT DOU YOU LIKE TO EAT</h3>
        </div>
        <div className="content-product">
          <Link to="/soda">Soda</Link>
          <Link to="/chips">Chips</Link>
          <Link to="/sardines">Fresh Sardines</Link>
        </div>
      </div>
    );
  }
}

export default VendingMachine;
