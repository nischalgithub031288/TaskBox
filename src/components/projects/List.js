import React from "react";
// npm install --save react-router-dom
// npm install --save react-redux
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ProjectList = props => {
  console.log(props);
  return (
    <div>
      <h2> Projects - {props.projects.length}</h2>
      <ul>
        {props.projects.map(project => {
          return (
            <li key={project.id}>
              <Link to={`/projects/${project.id}`}>{project.name} </Link>
            </li>
          );
        })}
      </ul>

      <Link to="/projects/new"> Add Project </Link>
    </div>
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
