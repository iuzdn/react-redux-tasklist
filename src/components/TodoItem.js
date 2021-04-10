import React from "react";
import { useDispatch } from "react-redux";
import { deleteItem, selectItem } from "../actions";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={() => dispatch(selectItem(todo.id))}>Edit</button>
      <button onClick={() => dispatch(deleteItem(todo.id))}>Delete</button>
    </li>
  );
}
