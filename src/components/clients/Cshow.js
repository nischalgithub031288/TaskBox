import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { removeClient } from "../../actions/clients";
import { Button } from 'reactstrap'

const ClientShow = props => {
  console.log(props);
  const output1 = props.projects;
  console.log("output", output1);
  const output2 = output1.filter(
    output => output.category == props.client.name
  );

  const getOut = (output2[0].id);
  console.log(getOut)

  const output3 = props.tasks.filter(task => task.projectID == getOut)
  console.log(output3)

  return (
    <div>
      <h2>Name of Employee : {'    '} {props.client.name}</h2>
      <h2>Email : {'   '} {props.client.email}</h2>



      <h2>Total Task Assign - {output3.length} </h2>
      {/* {props.projects.map(project => {
        if (project.category === props.client.name) {
          return <li key={project.id}>{project.name}</li>;
        }
      })} */}

      {output3.map(output => <li key={output.id}>{output.title}</li>)}

      <br />

      {/* <Link to={`/clients/edit/${props.client.id}`}>edit</Link> */}

      <Button color="primary"
        onClick={() => {
          const confirmDelete = window.confirm("Are you sure?");
          if (confirmDelete) {
            props.dispatch(removeClient(props.client.id));
            props.history.push("/clients");
          }
        }}
      >
        Delete
      </Button> {'   '}

      <Link className="btn btn-primary" to="/clients">back</Link>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    client: state.client.find(client => client.id === props.match.params.id),
    projects: state.project,
    tasks: state.task
  };
};

export default connect(mapStateToProps)(ClientShow);
