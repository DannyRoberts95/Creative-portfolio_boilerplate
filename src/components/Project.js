import React, { Component } from "react";
import axios from "axios";

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      projectLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/http://www.behance.net/v2/projects/${
          this.props.match.params.id
        }?api_key=EnQn6zgYBKyZh2keUdkI1FdONQn7rava`
      )
      .then(response => {
        console.log(response.data);
        this.setState({
          project: response.data.project,
          projectLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const project = this.state.project;
    return (
      <div>
        <p>{project.name}</p>
      </div>
    );
  }
}

export default ProjectPage;
