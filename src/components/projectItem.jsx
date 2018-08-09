import React, { Component } from "react";

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="project">
        {this.props.project.title} - {this.props.project.category}{" "}
        <a
          href="#"
          onClick={this.deleteProject.bind(this, this.props.project.id)}
        >
          Delete
        </a>
      </li>
    );
  }
}

export default ProjectItem;
