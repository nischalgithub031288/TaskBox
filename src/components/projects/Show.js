import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeProject } from "../../actions/projects";
import TaskForm from "./AddTask";
import { addTask } from "../../actions/tasks";

const ProjectShow = props => {

  console.log(props)

  const handleSubmit = formData => {
    formData.projectID = props.project.id //for adding (***id of project ***)in  out test object//add key id from project id

    console.log(formData)
    props.dispatch(addTask(formData));





  };




  return (
    <div>

      {/* <h2>{props.project.category}</h2> */}
      <h2>Project assign : {props.project.category}</h2>

      <h2>Task given</h2>
      {props.tasks.map(output => {
        return (
          <li key={output.id}>{output.title}</li>
        )
      })}





      <Link to={`/projects/edit/${props.project.id}`}>edit</Link>

      <button
        onClick={() => {
          const confirmDelete = window.confirm("Are you sure?");
          if (confirmDelete) {
            props.dispatch(removeProject(props.project.id));
            props.history.push("/clients");

          }
        }}
      >
        delete
      </button>

      <Link to="/projects">back</Link>
      <h2>Add Task</h2>

      <TaskForm handleSubmit={handleSubmit} />


    </div>
  );
};

// const mapStateToProps = (state, props) => {
//   return {
//     project: state.projects.find(
//       project => project.id === props.match.params.id
//     ),
//     isAdmin: true
//   };
// };

const mapStateToProps = (state, props) => {
  return {
    project: state.project.find(project => project.id === props.match.params.id),
    tasks: state.task.filter(output => output.projectID == props.match.params.id)
  };
};

export default connect(mapStateToProps)(ProjectShow);
