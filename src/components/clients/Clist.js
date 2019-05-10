import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col, Table, Badge, Spinner, Button } from 'reactstrap'

const ClientList = props => {
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
        <Col > <h2> Employee List - <Badge color="info">{props.clients.length}</Badge> </h2></Col>

      </Row>
      <Row>

        <Col sm={{ size: 8, order: 3, offset: 1 }} style={scroll}>



          <Table striped bordered size="sm" hover style={Tablestyle} >
            <thead>
              <tr>
                <th>No.</th>
                <th>Employee</th>


              </tr>
            </thead>
            <tbody>
              {props.clients.map((project, index) => {
                return (
                  <tr key={project.id}>
                    <td>{index + 1}</td>
                    <td>{project.name}</td>
                    <td><Link className="btn btn-primary" to={`/clients/${project.id}`}>Details </Link></td>
                  </tr>
                );
              })}


            </tbody>
          </Table>
        </Col>
      </Row>
      <Row style={rowB}>
        <Link className="btn btn-primary" to="/clients/new">Add Employee</Link>

      </Row>

    </Container>











    // <div>
    //   <h2>Client List - {props.clients.length} </h2>
    //   <ul>
    //     {props.clients.map((client, index) => {
    //       return (
    //         <li key={client.id}>
    //           {index + 1} {client.name} {'          '}<Link to={`/clients/${client.id}`}>Details</Link>
    //         </li>
    //       );
    //     })}
    //   </ul>
    //   <Link className="btn btn-primary" to="/clients/new">Add client</Link>
    // </div>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.project,
    clients: state.client
  };
};
export default connect(mapStateToProps)(ClientList);
