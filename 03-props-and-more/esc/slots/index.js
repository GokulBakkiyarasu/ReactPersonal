class App extends React.Component {
  render() {
    return (
      <div>
        <Slot slot1="x" slot2="y" slot3="z" />
        <Slot slot1="x" slot2="x" slot3="x" />
        <Slot slot1="x" slot2="y" slot3="y" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
