export const add = (item) => {
  return {
    type: "ADD",
    payload: item,
  };
};

export const updateItem = (id, newContent) => {
  return {
    type: "UPDATE",
    payload: {
      id,
      newContent,
    },
  };
};

export const deleteItem = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

export const selectItem = (id) => {
  return {
    type: "SELECT",
    payload: id,
  };
};
