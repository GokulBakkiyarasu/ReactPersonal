//todos
// all methods to interact with todo

import React, { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/todos.reducer";

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const initialTodo = JSON.parse(window.localStorage.getItem("todos")) || [];

  const [todos, dispatch] = useReducer(reducer, initialTodo);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
