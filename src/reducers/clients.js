import uuid from "uuid";

const ClientInitialState = [
  { id: uuid(), name: "Nischal", email: "nisch@gmail.com" },
  { id: uuid(), name: "Sanjay", email: "sanj@gmail.com" },
  { id: uuid(), name: "Pavan", email: "pavan@gmail.com" },
  { id: uuid(), name: "Sachin", email: "sanchin@gmail.com" }
];

const clientReducer = (state = ClientInitialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.user];

    case "EDIT_USER":
      return state.map(user => {
        if (user.id === action.id) {
          return { ...user, ...action.user };
        } else {
          return user;
        }
      });

    case "REMOVE_USER":
      return state.filter(user => user.id !== action.id);

    default:
      return [...state];
  }
};
export default clientReducer;
