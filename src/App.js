import React from "react";
import ToDoInput from "../src/components/ToDoInput";
import ToDoList from "../src/components/ToDoList";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NestedTodoApp from "./nestedTodos/NestedTodoApp";

function App() {
  return (
    <div className="row mt-3" style={{ padding: "25px" }}>
      <div className="col-sm-6" style={{backgroundColor:"rgb(15 28 27 / 72%)"}}>
        <ToDoInput />
        <ToDoList />
      </div>
      <div className="col-sm-6" style={{backgroundColor:"rgb(22 9 2 / 48%)"}}>
        <NestedTodoApp />
      </div>
    </div>
  );
}

export default App;
