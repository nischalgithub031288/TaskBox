import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Dashboard from "./components/home/Dashboard";
import ProjectList from "./components/projects/List";
import ProjectNew from "./components/projects/New";
import ProjectShow from "./components/projects/Show";
import ProjectEdit from "./components/projects/Edit";
import AddTask from "./components/projects/AddTask";
import TaskEdit from "./components/projects/TaskEdit"

import ClientList from "./components/clients/Clist";
import ClientNew from "./components/clients/Cnew";
import ClientShow from "./components/clients/Cshow";
import ClientEdit from "./components/clients/Cedit";

//import TaskList from "./components/tasks/Tlist";
//import ProjectNew from "./component/tasks/Tnew";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h2>TaskBox</h2>
          <Link to="/"> Home </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/clients"> Clients</Link>
          {/* <Link to="/tasks">Tasks</Link> */}

          <Switch>
            <Route path="/" component={Dashboard} exact={true} />
            <Route path="/projects" component={ProjectList} exact={true} />
            <Route path="/projects/new" component={ProjectNew} exact={true} />
            <Route path="/projects/:id" component={ProjectShow} exact={true} />
            <Route
              path="/projects/edit/:id"
              component={ProjectEdit}
              exact={true}
            />
            <Route path="/projects/task" component={AddTask} exact={true} />
            <Route path="/tasks/edit/:id" component={TaskEdit} exact={true} />

            <Route path="/clients" component={ClientList} exact={true} />
            <Route path="/clients/new" component={ClientNew} exact={true} />
            <Route path="/clients/:id" component={ClientShow} exact={true} />
            <Route
              path="/clients/edit/:id"
              component={ClientEdit}
              exact={true}
            />

            {/* <Route path="tasks/new" component={TaskNew} exact={true} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
// import Dashboard from "./components/home/Dashboard";

// import ProjectList from "./components/home/projects/List";
// import ProjectNew from "./components/home/projects/New";

// class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <h2>TaskBox</h2>
//           <Link to="/">Dashboard</Link>
//           <Link to="/projects">Projects</Link>
//           <Switch>
//             <Route path="/" component={Dashboard} exact={true} />
//             <Route path="/projects" component={ProjectList} exact={true} />
//             <Route path="/projects/new" component={ProjectNew} exact={true} />
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default App;
