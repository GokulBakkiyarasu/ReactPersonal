import { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
    this.addItems = this.addItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.strikeItem = this.strikeItem.bind(this);
  }

  //adds new todo to the existing todo list
  addItems(item) {
    this.setState((curState) => ({
      todo: [...curState.todo, item],
    }));
  }

  //delete an existing todo element from the todo list
  deleteItem(item) {
    this.setState((curState) => ({
      todo: curState.todo.filter((todo) => todo.id !== item.id),
    }));
  }

  //edit a existing todo in the todo list
  editItem(item) {
    this.setState((curState) => ({
      todo: curState.todo.map((todo) => (item.id === todo.id ? item : todo)),
    }));
  }

  //strike the todo that is toggled
  strikeItem(item) {
    this.setState((curState) => ({
      todo: curState.todo.map((todo) => (item.id === todo.id ? item : todo)),
    }));
  }

  render() {
    return (
      <div className="todoList">
        <h1 className="todoList-h1">Todo List!</h1>
        <span className="todoList-span">A Simple React Todo List App</span>
        <div className="todoList-todo">
          {this.state.todo.map((todo, index) => (
            <Todo
              task={todo.task}
              deleteItem={this.deleteItem}
              editItem={this.editItem}
              key={index}
              id={todo.id}
              strike={todo.strike}
              strikeItem={this.strikeItem}
            />
          ))}
        </div>
        <NewTodoForm addItems={this.addItems} />
      </div>
    );
  }
}

export default TodoList;
