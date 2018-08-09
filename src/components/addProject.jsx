import React, { Component } from "react";
import PropTypes from "prop-types";
import uuid from "uuid";

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }

  static defaultProps = {
    categories: ["Web Design", "Web development", "Mobile Development"]
  };

  handleSubmit(e) {
    if (this.refs.title.value === "") {
      alert("Title is required");
    } else {
      this.setState(
        {
          newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        },
        function() {
          // console.log(this.state);
          this.props.addProject(this.state.newProject);
        }
      );
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />

            <label>Category</label>
            <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array,
  addProject: PropTypes.func,
  newProject: PropTypes.object
};

export default AddProject;
