const initialState = {
  todos: [
    { id: 1, text: "Do Async homework", completed: false },
    { id: 2, text: "Do groceries", completed: true },
    { id: 3, text: "Play with brother", completed: false },
    { id: 4, text: "Help mother", completed: false },
  ],
  currentItemId: -1,
};

const nextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const addItem = (state, newItemText) => {
  return {
    ...state,
    todos: [
      ...state.todos,
      {
        id: nextTodoId(state.todos),
        text: newItemText,
        completed: false,
      },
    ],
  };
};

const selectItem = (state, id) => {
  return {
    ...state,
    currentItemId: id,
  };
};

const updateItem = (state, id, newContent) => {
  const todos = state.todos.map((todo) =>
    todo.id === id ? { ...todo, text: newContent } : todo
  );

  return {
    ...state,
    todos,
    currentItemId: -1,
  };
};

const deleteItem = (state, id) => {
  return {
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  };
};

const todosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD":
      return addItem(state, payload);
    case "SELECT":
      return selectItem(state, payload);
    case "UPDATE":
      return updateItem(state, payload.id, payload.newContent);
    case "DELETE":
      return deleteItem(state, payload);
    default:
      return state;
  }
};

export default todosReducer;
