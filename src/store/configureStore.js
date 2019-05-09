import { createStore, combineReducers } from "redux";

import projectsReducer from "../reducers/projects";
import clientReducer from "../reducers/clients";
import taskReducer from "../reducers/tasks";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      project: projectsReducer,
      client: clientReducer,
      task: taskReducer
    })
  );
  return store;
};

export default configureStore;
