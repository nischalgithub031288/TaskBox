export const addClient = user => {
  return {
    type: "ADD_USER",
    user
  };
};

export const editClient = (id, user) => {
  return {
    type: "EDIT_USER",
    id,
    user
  };
};

export const removeClient = id => {
  return {
    type: "REMOVE_USER",
    id
  };
};
