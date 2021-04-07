import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, setCurrent } from "./actions";
import InputArea from "./components/inputArea";

function App() {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>TaskList:</h1>
      <InputArea />
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => dispatch(setCurrent(index))}>Edit</button>
            <button onClick={() => dispatch(deleteItem(index))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
