class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <Hello to="Gokul" from="Sk" />
        </h1>
        <h1>
          <Hello to="Gokul" from="Sudar" />
        </h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
