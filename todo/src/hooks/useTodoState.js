import { useState } from "react";

export default function useTodoState(initialValue) {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([
        ...todos,
        { id: todos.length + 1, task: newTodoText, completed: false },
      ]);
    },

    deleteTodo: (todoId) => {
      const updatedTodo = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodo);
    },
    toggleTodo: (todoId) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodo);
    },
    updateTodo: (todoId, newTask) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodo);
    },
  };
}
