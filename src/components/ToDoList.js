import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../redux/actions";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const toggleTodo = (id) => {
    dispatch(toggleTodoAction(id));
  };
  const deleteTodo = (id) => dispatch(deleteTodoAction(id));

  return (
    <div>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className="row mb-1">
            <div className="col-sm-2" style={{ paddingTop: "15px" }}>
              <input
                style={{ height: "30px", width: "30px"}}
                type="checkbox"
                checked={todo.complete}
                onChange={toggleTodo.bind(null, todo.id, todo.complete)}
              />
            </div>
            <div
              className="col-sm-8 alert alert-info"
              style={{ cursor: "pointer", color:"black"}}
              onClick={toggleTodo.bind(null, todo.id, todo.complete)}
            >
              {todo.complete===true?<span style={{color:"grey"}}>{todo.name}</span>:<span>{todo.name}</span>}
            </div>
            <div className="col-sm-2" style={{ paddingTop: "8px" }}>
              <button
                style={{color:"white"}}
                className="btn"
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
