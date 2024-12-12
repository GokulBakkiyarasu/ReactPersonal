import { styled } from "@mui/material/styles";
import { Paper, AppBar, Toolbar, Grid2, Typography } from "@mui/material";
import TodoForm from "./TodoFrom";
import TodoList from "./TodoList";
import { TodosProvider } from "./contexts/todos.context";

export default function TodoApp() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            TODO'S WITH HOOKS
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid2
        container
        spacing={2}
        justifyContent="center"
        style={{ marginTop: "1rem" }}
      >
        <Grid2 size={{ xs: 11, md: 8, lg: 4 }}>
          <Item>
            <TodosProvider>
              <TodoForm />
              <TodoList />
            </TodosProvider>
          </Item>
        </Grid2>
      </Grid2>
    </Paper>
  );
}
