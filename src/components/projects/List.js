import React from "react";
// npm install --save react-router-dom
// npm install --save react-redux
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Row, Col, Table, Badge, Spinner, Button } from 'reactstrap'

const ProjectList = props => {
  console.log(props);



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
        <Col > <h2> List Of Project - <Badge color="info">{props.projects.length}</Badge> </h2></Col>

      </Row>
      <Row>

        <Col sm={{ size: 8, order: 3, offset: 1 }} style={scroll}>



          <Table striped bordered size="sm" hover style={Tablestyle} >
            <thead>
              <tr>
                <th>No.</th>
                <th>Project</th>


              </tr>
            </thead>
            <tbody>
              {props.projects.map((project, index) => {
                return (
                  <tr key={project.id}>
                    <td>{index + 1}</td>
                    <td>{project.name}</td>
                    <td><Link className="btn btn-primary" to={`/projects/${project.id}`}>Details </Link></td>
                  </tr>
                );
              })}


            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>



    // <div>
    //   <h2> List Projects - {props.projects.length}</h2>
    //   <ul>
    //     {props.projects.map(project => {
    //       return (
    //         <li key={project.id}>{project.name}
    //           <Link to={`/projects/${project.id}`}>Details </Link>
    //         </li>
    //       );
    //     })}
    //   </ul>

    //   <Link to="/projects/new"> Add Project </Link>
    // </div>
  );
};

const mapStateToProps = state => {
  console.log("1", state);
  return {
    projects: state.project,
    clients: state.client,
    tasks: state.task
  };
};

export default connect(mapStateToProps)(ProjectList);

// import React from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";

// const ProjectList = props => {
//   console.log(props);
//   return (
//     <div>
//       <h2>Listing Projects - {props.projects.length} </h2>
//       <ul>
//         {props.projects.map(project => {
//           return <li key={project.id}>{project.name}</li>;
//         })}
//       </ul>
//       <Link to="/projects/new">Add Projects</Link>
//     </div>
//   );
// };
// const mapStateToProps = state => {
//   return {
//     projects: state.project
//   };
// };

// export default connect(mapStateToProps)(ProjectList);
