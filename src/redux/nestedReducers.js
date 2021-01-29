import uuid from "uuid/v4";

const nestedTodoReducer = ({todos}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { todoId, todoContent } = action.payload;
      const newtodo = {
        id: uuid(),
        content: todoContent,
        children: [],
      };

      const findNestedtodo = (todos) => {
        return todos.map((c) => {
          if (c.id === todoId) {
            c.children.push(newtodo);

            return c;
          }

          return findNestedtodo(c.children);
        });
      };

      if (todoId) {
        findNestedtodo(todos);
      } else {
        todos.push(newtodo);
      }

      return { todos: [...todos] };
    case "DELETE_TODO":
      return {
        todos: [todos.filter((todo) => todo.id !== action.payload)],
      };
    default:
      return todos;
  }
};

export default nestedTodoReducer;