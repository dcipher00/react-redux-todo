import React, { createContext, useReducer } from "react";
import NestedTodoForm from "./NestedTodoForm";
import NestedTodoList from "./NestedTodoList";
import "./style.css";
import nestedTodoReducer from "../redux/nestedReducers";

const initialState = {
  todos: [
    {
      id: "fe272b04-edda-4a0c-8063-e8ddbd246261",
      content: "Click Add below",
      children: [
        {
          id: "a5088546-1a98-4be7-9385-f5f506fdf591",
          content: "For nested todos",
          children: [],
        },
      ],
    },
  ],
};

export const TodoContext = createContext(initialState);

const NestedTodoApp = () => {
  const [{ todos }, dispatch] = useReducer(nestedTodoReducer, initialState);

  return (
    <TodoContext.Provider value={dispatch}>
      <NestedTodoForm todoId={null} />
      <NestedTodoList list={todos} />
    </TodoContext.Provider>
  );
};

export default NestedTodoApp;
