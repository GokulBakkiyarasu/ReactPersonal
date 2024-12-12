import { Component } from "react";
import "./NewBoxForm.css";
import { v4 as uuidv4 } from "uuid";

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = { width: "", height: "", color: "", key: uuidv4() };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addBox(this.state);
    this.setState({ width: "", height: "", color: "", key: uuidv4() });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    return (
      <>
        <h1>Box Maker Thingy</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="width">Width: </label>
          <input
            type="text"
            id="width"
            name="width"
            onChange={this.handleChange}
            value={this.state.width}
          />
          <br />
          <label htmlFor="width">Height: </label>
          <input
            type="text"
            id="height"
            name="height"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <br />
          <label htmlFor="width">Color: </label>
          <input
            type="text"
            id="color"
            name="color"
            onChange={this.handleChange}
            value={this.state.color}
          />
          <br />
          <button className="form-button">Create Box!</button>
        </form>
      </>
    );
  }
}

export default NewBoxForm;
