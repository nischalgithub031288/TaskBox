import React from "react";
import { connect } from "react-redux";
import { editTask } from '../../actions/tasks'
import { removeTask } from '../../actions/tasks'
import { Link } from 'react-router-dom'

const DashBoard = props => {





  return (
    <div>
      <h2>Total Projects {props.projects.length}</h2>

      <h2>Total clients {props.clients.length} </h2>

      <h2>Total Tasks {props.tasks.length}</h2>


      <h2>Recent Tasks {props.tasks.map(task => {
        return <li key={task.id}>{task.title} {task.isCompleted ? 'completed' : <input type="checkbox" onChange={() => { props.dispatch(editTask(task.id, { isCompleted: true })) }} />} <button onClick={() => { props.dispatch(removeTask(task.id)) }}  >delete</button><Link to={`/tasks/edit/${task.id}`}>edit</Link></li>
      })}</h2>




    </div>
  );
};
const mapStateToProps = state => {
  console.log("2", state);
  return {
    projects: state.project,
    clients: state.client,
    tasks: state.task
  };
};

export default connect(mapStateToProps)(DashBoard);
