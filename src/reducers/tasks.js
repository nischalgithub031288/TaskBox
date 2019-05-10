import uuid from "uuid";
const ProjectInitialState = [
  {
    id: uuid(),
    title: " Maintaining Frontend",
    isCompleted: true,
    projectId: "3099dd02-f08d-4127-9682-f9edab79e5b3",
    dueDate: "2019-03-15"
  },
  {
    id: uuid(),
    title: "Maintaing  Backend ",
    isCompleted: "",
    projectId: "660c0b6e-df33-4e30-b4cf-8049be7cef52",
    dueDate: "2019-05-18"
  },
  {
    id: uuid(),
    title: "Maintaing DataBase",
    isCompleted: true,
    projectId: "660c0b6e-df33-4e30-b4cf-8049be7cef52",
    dueDate: "2019-08-19"
  },
  {
    id: uuid(),
    title: "Designing",
    isCompleted: "",
    projectId: "660c0b6e-df33-4e30-b4cf-8049be7cef52",
    dueDate: "2019-08-19"
  },
  {
    id: uuid(),
    title: "Software Developing",
    isCompleted: true,
    projectId: "660c0b6e-df33-4e30-b4cf-8049be7cef52",
    dueDate: "2019-08-19"
  }
];
//console.log(ProjectInitialState);
const taskReducer = (state = ProjectInitialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.task];

    case "EDIT_TASK":
      // console.log(action)
      return state.map(task => {
        if (task.id === action.id) {
          return { ...task, ...action.task };
        } else {
          return task;
        }
      });

    case "REMOVE_TASK":
      return state.filter(task => task.id !== action.id);

    default:
      return [...state];
  }
};
export default taskReducer;
