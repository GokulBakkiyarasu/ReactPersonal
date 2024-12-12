import { Component } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

class JokeList extends Component {
  // default number of jokes is set to 10 as it is passed as default prop
  static defaultProps = {
    numOfJokes: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.jokes || "[]"),
      isLoading: false,
      seenJokes: JSON.parse(window.localStorage.seenJokes || "[]"),
    };
    this.upvote = this.upvote.bind(this);
    this.downvote = this.downvote.bind(this);
    this.getJoke = this.getJoke.bind(this);
    this.getNewJokes = this.getNewJokes.bind(this);
  }

  // get a list of joke when component is mounded
  componentDidMount() {
    this.getJoke();
  }

  // fetches jokes from the api
  async getJoke() {
    if (this.state.jokes.length === 0) {
      let jokeList = [];

      // loop to fetch the number of jokes required
      while (jokeList.length < this.props.numOfJokes) {
        let joke = await axios.get("https://icanhazdadjoke.com/", {
          headers: { Accept: "application/json" },
        });

        // condition to avoid redundancy of jokes
        let isNot = true;
        for (let prevJoke of this.state.seenJokes) {
          if (prevJoke.joke === joke.data.joke) {
            isNot = false;
            break;
          }
        }

        // if condition passes pushes it to the jokeList
        if (isNot) {
          jokeList.push({ joke: joke.data.joke, id: uuid(), voteCount: 0 });
        }
      }

      // set the state with the jokes,isLoading,seenJokes
      this.setState((curState) => ({
        jokes: jokeList,
        isLoading: false,
        seenJokes: [...curState.seenJokes, ...jokeList],
      }));

      // update them to the local window storage
      window.localStorage.setItem("jokes", JSON.stringify(jokeList));
      window.localStorage.setItem(
        "seenJokes",
        JSON.stringify(this.state.seenJokes)
      );
    }
  }
  getNewJokes() {
    this.setState(
      {
        jokes: [],
        isLoading: true,
      },
      this.getJoke
    );
  }

  // function that increase voteCount of a joke
  async upvote(val) {
    await this.setState((curState) => ({
      jokes: curState.jokes.map((j) => (j.id === val.id ? val : j)),
    }));
    window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
  }

  // function that decrease voteCount of a joke
  async downvote(val) {
    await this.setState((curState) => ({
      jokes: curState.jokes.map((j) => (j.id === val.id ? val : j)),
    }));
    window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes));
  }

  render() {
    let jokes = this.state.jokes.sort((a, b) => b.voteCount - a.voteCount);
    return this.state.isLoading ? (
      <div className="Joke-loading">
        <i className="fa-regular fa-face-laugh fa-spin-custom fa-8x" />
        <h1>Loading!..</h1>
      </div>
    ) : (
      <div className="JokeList">
        {" "}
        <div className="JokeList-left">
          <h1>
            Dad <span>Jokes</span>
          </h1>
          <div className="JokeList-left-img">
            <img
              src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
              alt="laughing-img"
            />
          </div>

          <button className="JokeList-left-button" onClick={this.getNewJokes}>
            New Jokes
          </button>
        </div>
        <div className="JokeList-right">
          {jokes.map((j, index) => (
            <Joke
              joke={j.joke}
              id={j.id}
              key={index}
              voteCount={j.voteCount}
              upvote={this.upvote}
              downvote={this.downvote}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokeList;
