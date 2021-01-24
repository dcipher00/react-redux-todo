import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/actions";
import uuid from "uuid/v4";

const ToDoInput = () => {
  const [todo, setToDo] = useState("");
  const dispatch = useDispatch();
  const addToDo = todo => dispatch(addTodoAction(todo));

  const handleChange = event => {
    setToDo(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    const newTodo = {
      id: uuid(),
      name: todo,
      complete:false,
    };
    addToDo(newTodo);
    setToDo("");
  };
  return (
    <form onSubmit={submitForm} method="POST">
      <div className="row mt-3">
        <div className="form-group col-sm-8">
          <input
            type="text"
            required
            placeholder="Add a todo"
            name="todo"
            className="form-control"
            value={todo}
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-4">
          <button type="submit" className="btn btn-primary btn-md">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default ToDoInput;
