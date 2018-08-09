import React, { Component } from "react";
import PropTypes from "prop-types";
import ProjectItem from "./projectItem";

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        // console.log(project);
        return (
          <ProjectItem
            onDelete={this.deleteProject.bind(this)}
            key={project.id}
            project={project}
          />
        );
      });
    }

    return <div className="projects">{projectItems}</div>;
  }
}

// good practice to do this
Projects.propTypes = {
  projects: PropTypes.array,
  onDelete: PropTypes.func
};

export default Projects;
