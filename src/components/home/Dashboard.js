import React from "react";
import { connect } from "react-redux";
import { editTask } from '../../actions/tasks'
import { removeTask } from '../../actions/tasks'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Table, Badge, Spinner, Button } from 'reactstrap'

const DashBoard = props => {


  const Tablestyle = {
    background: '#fdfee2'
  }
  const scroll = {
    height: "400px",
    overflowY: "scroll"
  }
  const rowB = {

  }


  return (

    <Container>
      <br />
      <Row style={rowB}>
        <Col > <h2> List Of Task - <Badge color="info">{props.tasks.length}</Badge> </h2></Col>

      </Row>
      <Row>

        <Col sm={{ size: 8, order: 3, offset: 1 }} style={scroll}>



          <Table striped bordered size="sm" hover style={Tablestyle} >
            <thead>
              <tr>
                <th>No.</th>
                <th>Project</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>


              {/* {this.state.filterData.sort(function (a, b) {
                  var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
                  if (nameA < nameB) //sort string ascending
                    return -1
                  if (nameA > nameB)
                    return 1
                  return 0 //default return value (no sorting)
                }).map((contact, index) => {
                  return <tr key={contact._id}>
                    <td>{index + 1}</td>
                    <td><Link to={`/contacts/${contact._id}`} >{contact.name}</Link></td>
                    <td>{contact.mobile}</td>
                    <td>{contact.email}</td>

                  </tr>
                })} */}

              {props.tasks.map((task, index) => {
                return <tr key={task.id}>
                  <td>{index + 1}</td>
                  <td>{task.title}</td>
                  <td>{task.isCompleted ? 'completed' : <input type="checkbox" onChange={() => { props.dispatch(editTask(task.id, { isCompleted: true })) }} />}</td>

                  <td><Link className="btn btn-primary" to={`/tasks/edit/${task.id}`}>edit</Link></td>
                  <td><Button outline color="danger" onClick={() => { props.dispatch(removeTask(task.id)) }}  >Delete</Button></td>
                </tr>
              })}

            </tbody>
          </Table>


        </Col>
      </Row>
    </Container >















    // <div>
    //   <h2>Total Projects {props.projects.length}</h2>

    //   <h2>Total clients {props.clients.length} </h2>

    //   <h2>Total Tasks {props.tasks.length}</h2>


    //   <h2>Recent Tasks {props.tasks.map(task => {
    //     return <li key={task.id}>{task.title} {task.isCompleted ? 'completed' : <input type="checkbox" onChange={() => { props.dispatch(editTask(task.id, { isCompleted: true })) }} />} <button onClick={() => { props.dispatch(removeTask(task.id)) }}  >delete</button><Link to={`/tasks/edit/${task.id}`}>edit</Link></li>
    //   })}</h2>




    // </div>
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
