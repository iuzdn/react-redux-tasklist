import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add, setCurrent, updateItem } from "../actions";

function InputArea(props) {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const current = useSelector((state) => state.current);

  useEffect(() => {
    current !== null && setInputText(items[current]);
  }, [current, items]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div>
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        onClick={() => {
          if (current !== null) {
            dispatch(updateItem(current, inputText));
            dispatch(setCurrent(null));
          } else {
            dispatch(add(inputText));
          }
          setInputText("");
        }}
      >
        <span>Submit</span>
      </button>
    </div>
  );
}

export default InputArea;
