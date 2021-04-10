import React from "react";
import InputArea from "./components/InputArea";
import TaskList from "./components/TodoList";

function App() {
  return (
    <div>
      <h1>TaskList:</h1>
      <InputArea />
      <TaskList />
    </div>
  );
}

export default App;
