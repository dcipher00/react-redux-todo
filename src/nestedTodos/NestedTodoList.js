import React from "react";
import NestedTodoItem from "./NestedTodoItem";

const NestedTodoList = ({ list }) => (
  <ul style={{ paddingLeft: 20 }}>
    {(list || []).map(c => (
      <NestedTodoItem key={c.id} item={c} />
    ))}
  </ul>
);

export default NestedTodoList;
