import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  render() {
    return <li className="todo">{this.props.todo.title}</li>;
  }
}

// good practice to do this
TodoItem.propTypes = {
  todo: PropTypes.object
};

export default TodoItem;
