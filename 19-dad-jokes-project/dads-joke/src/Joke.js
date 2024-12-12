import { Component } from "react";
import "./Joke.css";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // picks a color based on the voteCount of a joke
  getColor(voteCount) {
    if (voteCount >= 15) {
      return "#4CAF50";
    } else if (voteCount >= 12) {
      return "#8BC34A";
    } else if (voteCount >= 9) {
      return "#CDDC39";
    } else if (voteCount >= 6) {
      return "#FFEB3B";
    } else if (voteCount >= 3) {
      return "#FFC107";
    } else if (voteCount >= 0) {
      return "#FF9800";
    } else {
      return "#F44336";
    }
  }

  // picks a emoji based on the voteCount of a joke
  getEmoji(voteCount) {
    if (voteCount >= 15) {
      return "em em-rolling_on_the_floor_laughing";
    } else if (voteCount >= 12) {
      return "em em-laughing";
    } else if (voteCount >= 9) {
      return "em em-smiley";
    } else if (voteCount >= 6) {
      return "em em-slightly_smiling_face";
    } else if (voteCount >= 3) {
      return "em em-neutral_face";
    } else if (voteCount >= 0) {
      return "em em-confused";
    } else {
      return "em em-angry";
    }
  }

  //handles the upvote and downvote button clicks
  handleClick(e) {
    if (e.target.name === "upvote") {
      this.props.upvote({
        joke: this.props.joke,
        id: this.props.id,
        voteCount: this.props.voteCount + 1,
      });
    } else {
      this.props.downvote({
        joke: this.props.joke,
        id: this.props.id,
        voteCount: this.props.voteCount - 1,
      });
    }
  }
  render() {
    return (
      <>
        {" "}
        <div className="Joke">
          <div className="Joke-score">
            <button
              className="fa-solid fa-thumbs-up"
              style={{ color: "#63E6BE" }}
              onClick={this.handleClick}
              name="upvote"
            ></button>
            <div
              className="Joke-vote-count"
              style={{
                borderColor: this.getColor(this.props.voteCount),
              }}
            >
              {this.props.voteCount}
            </div>
            <button
              className="fa-solid fa-thumbs-down fa-flip-horizontal"
              style={{ color: "#ed1212" }}
              name="downvote"
              onClick={this.handleClick}
            ></button>
          </div>
          <div className="Joke-content">
            <p className="Joke-para">{this.props.joke}</p>
            <div className="Joke-content-emoji">
              <i className={this.getEmoji(this.props.voteCount)}></i>
            </div>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default Joke;
