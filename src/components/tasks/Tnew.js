import React from "react";
import { connect } from "react-redux";

import { addTask } from "../../actions/tasks";
//import TaskForm from "./Form";

class TaskNew extends React.Component {
  //   handleSubmit = formData => {
  //     this.props.dispatch(addTask(formData));
  //     this.props.history.push("/projects");
  //   };

  render() {
    //console.log(this.props);
    return (
      <div>
        <h2> Add Task </h2>
      </div>
    );
  }
}

export default connect()(TaskNew);
