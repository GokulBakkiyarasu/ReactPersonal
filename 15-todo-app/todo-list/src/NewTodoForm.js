import { Component } from "react";
import { v4 as uuid } from "uuid";
import "./NewTodoForm.css";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "", id: uuid(), strike: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //handle submit event of a new todo
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addItems(this.state);
    this.setState({ task: "", id: uuid() });
  }

  //handles the change in the NewTodoForm
  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="newTodo">New Todo</label>
          <input
            placeholder="New Todo"
            value={this.state.task}
            onChange={this.handleChange}
            id="newTodo"
          />
          <button>Add Todo</button>
        </form>
      </>
    );
  }
}

export default NewTodoForm;
