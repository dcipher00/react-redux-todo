import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../redux/actions";
import "./style.css";
const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const toggleTodo = (id,comp) => {
    dispatch(toggleTodoAction(id));
    if(comp==='false' || comp==='true')
      console.log(!comp+" "+id);
  };
  const deleteTodo = (id) => dispatch(deleteTodoAction(id));

  const handleComplete = (e) => {
    const element = e.target;
    element.classList.toggle("crossed-line");
  };

  return (
    <div style={{ width: "600px" }}>
      {todos && todos.length === 0 && (
        <p className="alert alert-info">Please Add a Todo</p>
      )}
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className="row mb-1">
            <div className="col-sm-2" style={{ paddingTop: "15px" }}>
              <input
                style={{height:"30px",width:"30px"}}
                type="checkbox"
                checked={todo.complete}
                onChange={toggleTodo.bind(null, todo.id, todo.complete)}
              />
            </div>
            <div
              className="col-sm-8 list-group-item"
              style={{ cursor: "pointer" }}
              onClick={handleComplete}
              key={todo.id}
            >
              <span>{todo.name}</span>
            </div>
            <div className="col-sm-2" style={{ paddingTop: "8px" }}>
              <button
                className="btn btn-danger"
                onClick={deleteTodo.bind(null, todo.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
export default TodoList;
