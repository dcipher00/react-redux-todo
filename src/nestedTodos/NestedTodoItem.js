import React, { useState } from "react";
import NestedTodoList from "./NestedTodoList";
import NestedTodoForm from "./NestedTodoForm";
// import { TodoContext } from "./NestedTodoApp";

const NestedTodoItem = ({ item }) => {
  const [formVisible, setFormVisible] = useState(false);
  // const dispatch = useContext(TodoContext);

  const handleTodoClick = () => {
    setFormVisible(!formVisible);
  };

  const handleComplete = (e) => {
    const element = e.target;
    element.classList.toggle("crossed-line");
  };

  // const handleDelete = (todoId) => {
  //   console.log(todoId);
  //   dispatch({
  //     type: "DELETE_TODO",
  //     payload: { todoId },
  //   });
  // };

  return (
    <li>
      <div className="row mb-1">
        {/* <div className="col-sm-2" style={{ paddingTop: "15px" }}>
          <input style={{ height: "30px", width: "30px" }} type="checkbox" />
        </div> */}
        <div
          className="col-sm-8 alert alert-info"
          style={{ cursor: "pointer", color: "black" }}
          onClick={handleComplete}
        >
          <span>{item.content}</span>
        </div>
        <div className="col-sm-2" style={{ paddingTop: "8px" }}>
          <button
            style={{ color: "white" }}
            className="btn"
            // onClick={handleDelete.bind(null, item.id)}
          >
            X
          </button>
        </div>
      </div>
      {item.children && <NestedTodoList list={item.children} />}
      {formVisible ? (
        <>
          <NestedTodoForm todoId={item.id} />
          <span className="badge badge-warning" onClick={handleTodoClick}>
            Hide
          </span>
        </>
      ) : (
        <span className="badge badge-light" onClick={handleTodoClick}>
          Add
        </span>
      )}
    </li>
  );
};

export default NestedTodoItem;
