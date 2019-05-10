import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeProject } from "../../actions/projects";
import TaskForm from "./AddTask";
import { addTask } from "../../actions/tasks";
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap'

const ProjectShow = props => {

  console.log(props)

  const handleSubmit = formData => {
    formData.projectID = props.project.id //for adding (***id of project ***)in  out test object//add key id from project id

    console.log(formData)
    props.dispatch(addTask(formData));





  };




  return (

    <div>
      <div className="container">
        <br />
        <div className="row">
          <div className="col">

          </div>
          <div className="col-6">
            <Card>
              {/* <CardImg top src={process.env.PUBLIC_URL + '/contact-icon.png'} width="200px" height='200px' alt="Card image cap" /> */}
              <CardBody>

                <CardTitle><h4>Employee Name&nbsp;&nbsp;&nbsp;&nbsp;: {props.project.category}</h4></CardTitle>
                <CardTitle><h4>Please Add task for this Employee&nbsp;&nbsp;:{props.tasks.map(output => {
                  return (
                    <li key={output.id}>{output.title}</li>
                  )
                })} </h4></CardTitle>

                <CardSubtitle>{' '}</CardSubtitle>
                <br />
                <Link className="btn btn-primary" to='/projects'>Back</Link>{' '}
                <Link className="btn btn-primary" to={`/projects/edit/${props.project.id}`}>Edit</Link>{' '}
                <Button color='primary' onClick={() => {
                  const confirmDelete = window.confirm("Are you sure?");
                  if (confirmDelete) {
                    props.dispatch(removeProject(props.project.id));
                    props.history.push("/clients");

                  }
                }}>Delete</Button>
              </CardBody>
              <TaskForm handleSubmit={handleSubmit} />
            </Card>







          </div>

          <div className="col">

          </div>
        </div>

      </div>


    </div>








    // <div>

    //   {/* <h2>{props.project.category}</h2> */}
    //   <h2>Project assign : {props.project.category}</h2>

    //   <h2>Task given</h2>
    //   {props.tasks.map(output => {
    //     return (
    //       <li key={output.id}>{output.title}</li>
    //     )
    //   })}





    //   <Link to={`/projects/edit/${props.project.id}`}>edit</Link>

    //   <button
    //     onClick={() => {
    //       const confirmDelete = window.confirm("Are you sure?");
    //       if (confirmDelete) {
    //         props.dispatch(removeProject(props.project.id));
    //         props.history.push("/clients");

    //       }
    //     }}
    //   >
    //     delete
    //   </button>

    //   <Link to="/projects">back</Link>
    //   <h2>Add Task</h2>

    //   <TaskForm handleSubmit={handleSubmit} />


    // </div>
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
