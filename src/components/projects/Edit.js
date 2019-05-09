import React from "react";
import ProjectFrom from "./Form";
import { connect } from "react-redux";
import { editProject } from "../../actions/projects";

class ProjectEdit extends React.Component {
  handleSubmit = formData => {
    this.props.dispatch(editProject(formData.id, formData));
    this.props.history.push(`/projects/${formData.id}`);
  };


  render() {


    const result = this.props.client.find(c => c.name === this.props.project.category)
    console.log(result)
    console.log(this.props.project)
    console.log(this.props.client)
    return (
      <div>
        <h2>edit project</h2>
        <ProjectFrom
          handleSubmit={this.handleSubmit}
          project={this.props.project} client={result}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    project: state.project.find(project => project.id === props.match.params.id),
    client: state.client
  };
};

export default connect(mapStateToProps)(ProjectEdit);
