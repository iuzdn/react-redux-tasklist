import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, updateItem } from "../actions";

function InputArea() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const { todos, currentItemId } = useSelector((state) => state.todos);

  useEffect(() => {
    if (currentItemId !== -1) {
      const currentItemText = todos.find((obj) => obj.id === currentItemId)
        .text;
      setInputText(currentItemText);
    }
  }, [todos, currentItemId]);

  function handleChange({ target }) {
    const newValue = target.value;
    setInputText(newValue);
  }

  function handleSubmit() {
    if (currentItemId !== -1) {
      dispatch(updateItem(currentItemId, inputText));
    } else {
      dispatch(add(inputText));
    }
    setInputText("");
  }

  return (
    <div>
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={() => handleSubmit()}>
        <span>Submit</span>
      </button>
    </div>
  );
}

export default InputArea;
