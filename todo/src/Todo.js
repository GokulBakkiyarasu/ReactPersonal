import React, { useContext, memo } from "react";
import useToggleState from "./hooks/useToggleState";
import { ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditTodo from "./EditTodo";
import { DispatchContext } from "./contexts/todos.context";

function Todo({ id, task, completed }) {
  const [isEdited, toggle] = useToggleState();
  const dispatch = useContext(DispatchContext);
  return (
    <ListItem
      style={{ height: "64px" }}
      secondaryAction={
        isEdited ? null : (
          <>
            <IconButton>
              <DeleteIcon
                aria-label="Delete"
                onClick={() => dispatch({ type: "REMOVE", id: id })}
              />
            </IconButton>
            <IconButton>
              <EditIcon aria-label="Edit" onClick={toggle} />
            </IconButton>
          </>
        )
      }
    >
      {isEdited ? (
        <EditTodo id={id} task={task} toggleIsEdited={toggle} />
      ) : (
        <>
          {" "}
          <Checkbox
            tabIndex={-1}
            checked={completed}
            color="secondary"
            onClick={() => dispatch({ type: "TOGGLE", id: id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
        </>
      )}
    </ListItem>
  );
}

export default memo(Todo);
