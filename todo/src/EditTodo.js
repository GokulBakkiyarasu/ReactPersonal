import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TextField } from "@mui/material";
import { DispatchContext } from "./contexts/todos.context";

export default function EditTodo({ id, task, toggleIsEdited }) {
  const [value, handleChange, reset] = useInputState(task);
  const dispatch = useContext(DispatchContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT", id: id, newTask: value });
    reset();
    toggleIsEdited();
  };
  return (
    <form onSubmit={handleSubmit} style={{ marginLeft: "1rem", width: "50%" }}>
      <TextField
        margin="normal"
        variant="standard"
        value={value}
        onChange={handleChange}
        autoFocus
        fullWidth
      />
    </form>
  );
}
