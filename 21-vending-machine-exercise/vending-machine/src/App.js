import "./App.css";
import { Component } from "react";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Sardines from "./Sardines";
import Chips from "./Chips";
import { Route, Routes, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    const activeStyle = {
      fontWeight: "bold",
      color: "green",
    };
    return (
      <>
        <div className="nav-bar">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
          <NavLink
            to="/soda"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Soda
          </NavLink>
          <NavLink
            to="/chips"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Chips
          </NavLink>
          <NavLink
            to="/sardines"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sardines
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route
            path="/soda"
            element={<Soda message={"Omg so much sugar"} />}
          />
          <Route
            path="/chips"
            element={<Chips message="No of bags consumed: " />}
          />
          <Route
            path="/sardines"
            element={
              <Sardines
                message={
                  "You you don't eat Sardines, The Sardines they eat you!"
                }
              />
            }
          />
        </Routes>
      </>
    );
  }
}

export default App;
