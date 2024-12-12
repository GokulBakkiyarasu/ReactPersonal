import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { Paper, TextField } from "@mui/material";
import { DispatchContext } from "./contexts/todos.context";

export default function TodoApp() {
  const [value, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", task: value });
    reset();
  };
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          variant="standard"
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
