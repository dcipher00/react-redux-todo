import React from "react";
import ToDoInput from "../src/components/ToDoInput";
import ToDoList from "../src/components/ToDoList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  return (
      <div className="container row mt-2">
        <div className="col-sm-6">
        <ToDoInput />
        </div>
        <div className="col-sm-6">
        <ToDoList />
        </div>
      </div>
  );
}

export default App;
