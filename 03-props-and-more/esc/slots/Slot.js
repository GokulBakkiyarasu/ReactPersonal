class Slot extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>
          {this.props.slot1 + " "}
          {this.props.slot2 + " "}
          {this.props.slot3}
        </h1>
        <h2>
          {this.props.slot1 === this.props.slot2 &&
          this.props.slot2 === this.props.slot3
            ? "You Won!"
            : "You Lose!"}
        </h2>
      </div>
    );
  }
}
