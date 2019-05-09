import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import configureStore from "./store/configureStore";
// //npm install --save react-router-dom

// //npm install --save react-redux (it gives up two thing)
// //1.it gives you component called provider
// //2.it gives you another called connect

// import { Provider } from "react-redux";

// //import { addProject, editProject, removeProject } from "./actions/projects";
// //import { addClient, editClient, removeClient } from "./actions/clients";

// const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });

// const ele = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// // store.dispatch(addProject({ id: 1, name: "piush", description: "hello" }));
// // store.dispatch(addProject({ id: 2, name: "nitesh", description: "hi" }));

// // store.dispatch(editProject(1, { name: "paresh" }));
// // store.dispatch(removeProject(1));

// // store.dispatch(addClient({ id: 8, name: "supriya" }));
// // store.dispatch(addClient({ id: 9, name: "meena" }));
// // store.dispatch(editClient(8, { name: "vijay" }));
// // store.dispatch(removeClient(8));

// ReactDOM.render(ele, document.getElementById("root"));
