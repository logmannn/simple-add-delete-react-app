import React, { Component } from "react";
import PropTypes from "prop-types";
import TodoItem from "./todoItem";

class Todos extends Component {
  render() {
    let todoItems;
    if (this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
      });
    }

    return (
      <div className="todos">
        <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}

// good practice to do this
Todos.propTypes = {
  todos: PropTypes.array
};

export default Todos;
