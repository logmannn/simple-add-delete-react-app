import React, { Component } from "react";
import uuid from "uuid";
import $ from "jquery";
import Projects from "./components/projects";
import AddProject from "./components/addProject";
import Todos from "./components/todos";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  getToDos() {
    $.ajax({
      url: "http://jsonplaceholder.typicode.com/todos",
      dataType: "json",
      success: function(data) {
        this.setState({ todos: data }, function() {
          console.log(this.state);
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: "Business Website",
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          title: "Social Website",
          category: "Mobile Development"
        },
        {
          id: uuid.v4(),
          title: "Eccomerce Shopping cart",
          category: "Web Development"
        }
      ]
    });
  }

  componentWillMount() {
    this.getProjects();
    this.getToDos();
  }

  componentDidMount() {
    this.getToDos();
  }

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(project);
    this.setState({ projects: projects });
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);

    this.setState({ projects: projects }); //resets state
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects
          projects={this.state.projects}
          onDelete={this.handleDeleteProject.bind(this)}
        />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
