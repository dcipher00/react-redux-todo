import React from "react";
import ToDoInput from "../src/components/ToDoInput";
import ToDoList from "../src/components/ToDoList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
      <div className="container">
        <ToDoInput />
        <ToDoList />
      </div>
  );
}

export default App;
