const itemsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return state.concat([action.payload]);
    case "UPDATE":
      state.splice(action.key, 1, action.newItem);
      let newArr = [];
      return newArr.concat(state);
    case "DELETE":
      return state.filter((item, index) => index !== action.key);
    default:
      return state;
  }
};

export default itemsReducer;
