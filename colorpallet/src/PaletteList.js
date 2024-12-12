import { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { blue, red } from "@mui/material/colors";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MiniPalette from "./MiniPalette";
import sizes from "./sizes";
import bg from "./bg.svg";
import "./PaletteList.css";

const StyledRoot = styled("div")({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundImage: `url(${bg})`,
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

const StyledContainer = styled("div")({
  width: "50%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  flexWrap: "wrap",
  [sizes.down("xl")]: {
    width: "80%",
  },
  [sizes.down("xs")]: {
    width: "75%",
  },
});

const StyledNav = styled("nav")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  "& h1,a": {
    color: "white",
  },
  alignItems: "center",
});

const StyledTransitionGroup = styled(TransitionGroup)({
  boxSizing: "border-box",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3, 30%)",
  gridGap: "2.5rem",
  [sizes.down("m")]: {
    gridTemplateColumns: "repeat(2, 50%)",
  },
  [sizes.down("xs")]: {
    gridTemplateColumns: "repeat(1, 100%)",
    gridGap: "1.5rem",
  },
});

const StyledHeading = styled("h1")({
  fontSize: "2rem",
});

class PaletteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDeleteDialog: false,
      deletingId: "",
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getNewPalette = this.getNewPalette.bind(this);
  }

  openDialog(id) {
    this.setState({ openDeleteDialog: true, deletingId: id });
  }

  closeDialog() {
    this.setState({ openDeleteDialog: false, deletingId: "" });
  }

  getNewPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }

  handleDelete() {
    this.props.deletePalette(this.state.deletingId);
    this.closeDialog();
  }

  render() {
    return (
      <StyledRoot>
        <StyledContainer>
          <StyledNav>
            <StyledHeading>React Colors</StyledHeading>
            <Link to="/palette/new">Create Palette</Link>
          </StyledNav>
          <StyledTransitionGroup>
            {this.props.palette.map((palette) => (
              <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                <MiniPalette
                  {...palette}
                  getNewPalette={this.getNewPalette}
                  key={palette.id}
                  openDialog={this.openDialog}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </StyledTransitionGroup>
        </StyledContainer>
        <Dialog
          open={this.state.openDeleteDialog}
          aria-labelledby="delete-dialog-title"
          onClose={this.closeDialog}
        >
          <DialogTitle id="delete-dialog-title">Are You Sure?</DialogTitle>
          <List>
            <ListItem button onClick={this.handleDelete}>
              <ListItemAvatar>
                <Avatar
                  style={{ backgroundColor: blue[200], color: blue[600] }}
                >
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Delete">Delete</ListItemText>
            </ListItem>

            <ListItem button onClick={this.closeDialog}>
              <ListItemAvatar>
                <Avatar style={{ backgroundColor: red[200], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Cancel">Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </StyledRoot>
    );
  }
}

export default PaletteList;
