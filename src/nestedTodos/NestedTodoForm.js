import React, { useContext, useState } from "react";
import { TodoContext } from "./NestedTodoApp";

const NestedTodoForm = ({ todoId }) => {
  const [todoval, setTodoval] = useState("");
  const dispatch = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoContent = todoval;
    if (todoContent) {
      dispatch({
        type: "ADD_TODO",
        payload: { todoId, todoContent },
      });
      setTodoval("");
    }
  };
  const handleChange = (e) => {
    setTodoval(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row mt-3">
        <div className="form-group col-sm-8">
          <input
            type="text"
            name="todoval"
            value={todoval}
            className="form-control"
            placeholder="Add a nested Todo"
            onChange={handleChange}
          />
        </div>
        <div className="col-sm-4">
          <button className="btn btn-primary" type="submit">
            Add Todo
          </button>
        </div>
      </div>
    </form>
  );
};

export default NestedTodoForm;
