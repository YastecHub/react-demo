import React from "react";
import TodoListItem from "./TodoListItem";
import "./Styles.css";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      list_title: "",
      current_value: "",
      todos: [],
    };

    this.deleteTodoByIndex = this.deleteTodoByIndex.bind(this);
  }

  deleteTodoByIndex(index) {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos.slice(0, index),
        ...prevState.todos.slice(index + 1),
      ],
    }));
  }

  render() {
    return (
      <div className="todo-list">
        <h2>todo list...</h2>
        <label>Tittle</label>
        <br />
        <input
          placeholder="Enter Title..."
          type="text"
          value={this.state.list_title}
          onChange={(event) => {
            this.setState({ list_title: event.target.value });
          }}
        />
        <br />
        {this.state.todos.map((todo, index) => {
          return (
            <TodoListItem
              deleteTodoByIndex={this.deleteTodoByIndex}
              index={index}
              key={index}
              title={todo.title}
              completed={todo.completed}
            />
          );
        })}
        <input
          placeholder="Todo Item Name"
          type="text"
          value={this.state.current_value}
          onChange={(event) => {
            this.setState({ current_value: event.target.value });
          }}
        />
        <button
          onClick={() => {
            this.setState((prevState) => ({
              todos: prevState.todos.concat({
                title: this.state.current_value,
                completed: false,
              }),
              current_value: "",
            }));
          }}
        >
          Add item to the list
        </button>
      </div>
    );
  }
}

export default TodoList;
