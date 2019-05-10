import uuid from "uuid";
const ProjectInitialState = [
  { id: uuid(), name: "Number Pattern", category: "Nischal" },
  { id: uuid(), name: "Ticket Master", category: "Pavan" },
  { id: uuid(), name: "E Commerce", category: "Sachin" },
  { id: uuid(), name: "Contact Maintance", category: "Sanjay" },
  { id: uuid(), name: "Food Master", category: "Rohan" },
  { id: uuid(), name: "Online Recharge", category: "Preeti" }

];
console.log(ProjectInitialState);
const projectsReducer = (state = ProjectInitialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.project];

    case "EDIT_PROJECT":
      // console.log(action)
      return state.map(project => {
        if (project.id === action.id) {
          return { ...project, ...action.project };
        } else {
          return project;
        }
      });

    case "REMOVE_PROJECT":
      return state.filter(project => project.id !== action.id);

    default:
      return [...state];
  }
};
export default projectsReducer;
