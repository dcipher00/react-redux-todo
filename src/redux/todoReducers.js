const initialState = {
  todos: [
    {id: "a5088546-1a98-4be7-9385-f5f506fdf591", name: "Click here or Select", complete: false},
    {id: "fe272b04-edda-4a0c-8063-e8ddbd246261", name: "Checkbox to mark complete", complete: false}
  ]
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        )
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

export default todoReducer;
