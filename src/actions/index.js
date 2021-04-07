export const add = (text) => {
  return {
    type: "ADD",
    payload: text,
  };
};

export const updateItem = (key, newItem) => {
  return {
    type: "UPDATE",
    key,
    newItem,
  };
};

export const deleteItem = (key) => {
  return {
    type: "DELETE",
    key,
  };
};

export const setCurrent = (key) => {
  return {
    type: "SET",
    key,
  };
};
