import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import whiskey from "./images/whiskey.jpg";
import hazel from "./images/hazel.jpg";
import tubby from "./images/tubby.jpg";
import DogList from "./DogList";
import Navbar from "./Navbar";
import DogDetails from "./DogDetails";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!",
        ],
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs.",
        ],
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food.",
        ],
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs.map((dog) => dog.name)} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <DogList dogs={this.props.dogs} />}
          ></Route>
          <Route
            exact
            path="/:name"
            render={(routeProps) => (
              <DogDetails {...routeProps} dogs={this.props.dogs} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
