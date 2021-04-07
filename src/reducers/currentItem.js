const currentReducer = (state = null, action) => {
  switch (action.type) {
    case "SET":
      return action.key;
    default:
      return state;
  }
};
export default currentReducer;
