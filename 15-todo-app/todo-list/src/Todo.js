import { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task,
      isEdited: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleStrike = this.handleStrike.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //handles the delete event of a todo item
  handleDelete() {
    this.props.deleteItem({ task: this.state.task, id: this.props.id });
  }

  //handles the submit of edited todo
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editItem({
      task: this.state.task,
      id: this.props.id,
    });
    this.setState({ isEdited: !this.state.isEdited });
  }

  //handles edit state of a todo
  handleEdit() {
    this.setState({ isEdited: !this.state.isEdited });
  }

  //handle changes mated in the edit form
  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }

  //handle strike state of a todo after completion
  handleStrike() {
    this.props.strikeItem({
      task: this.state.task,
      id: this.props.id,
      strike: !this.props.strike,
    });
  }

  render() {
    return (
      <>
        <div className="todo">
          {this.state.isEdited ? (
            <form onSubmit={this.handleSubmit} className="todo-form">
              <input onChange={this.handleChange} value={this.state.task} />
              <button>Save</button>
            </form>
          ) : (
            <div className="todo-task">
              <span
                onClick={this.handleStrike}
                className={`todo-content ${this.props.strike ? "struck" : ""}`}
              >
                <h3>{this.state.task}</h3>
              </span>
              <button onClick={this.handleEdit} className="todo-editButton">
                <h3>
                  <i class="fas fa-pen"></i>
                </h3>
              </button>
              <button onClick={this.handleDelete} className="todo-deleteButton">
                <h3>
                  <i class="fas fa-trash"></i>
                </h3>
              </button>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Todo;
