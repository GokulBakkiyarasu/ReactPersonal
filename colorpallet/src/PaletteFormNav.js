import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import PaletteMetaForm from "./PaletteMetaForm";
import sizes from "./sizes";

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const StyledNavButtons = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  marginRight: "1rem",
  width: "auto",
  [sizes.down("xs")]: {
    width: "100%",
    justifyContent: "center",
    marginRight: "0",
  },
});

const StyledButton = styled(Button)({
  margin: "0 0.5rem",
  height: "40px", // Set a consistent height for the buttons
  [sizes.down("xs")]: {
    margin: "0.25rem",
    height: "35px", // You can adjust for smaller screens if needed
    width: "auto",
  },
});

const StyledTypography = styled(Typography)({
  [sizes.down("xs")]: {
    fontSize: "15px",
  },
});

const StyledGoBackButton = styled(Button)({
  margin: "0 0.5rem",
  height: "40px",
  width: "120px",
  [sizes.down("xs")]: {
    margin: "0.25rem",
    height: "35px",
    width: "100px",
  },
});

class PaletteFormNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formShowing: false,
    };
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
  }

  showForm() {
    this.setState({ formShowing: true });
  }

  hideForm() {
    this.setState({ formShowing: false });
  }
  render() {
    return (
      <div>
        <CssBaseline />
        <AppBar position="fixed" open={this.props.open} color="default">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "500px" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.props.handleDrawerOpen}
                edge="start"
                sx={[
                  { mr: 2, display: "inline" },
                  this.props.open && { display: "none" },
                  {
                    [sizes.down("sm")]: {
                      mr: 1, // Less margin-right on small screens
                    },
                    [sizes.down("xs")]: {
                      mr: 0.5, // Even smaller margin-right on extra small screens
                    },
                  },
                ]}
              >
                <MenuIcon />
              </IconButton>
              <StyledTypography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: "inline" }}
              >
                Color drawer
              </StyledTypography>
            </div>

            <StyledNavButtons>
              <Link to="/">
                <StyledGoBackButton variant="contained" color="secondary">
                  Go Back
                </StyledGoBackButton>
              </Link>
              <StyledButton variant="contained" onClick={this.showForm}>
                Save
              </StyledButton>
            </StyledNavButtons>
          </Toolbar>
        </AppBar>
        {this.state.formShowing && (
          <PaletteMetaForm
            palette={this.props.palette}
            handleSubmit={this.props.handleSubmit}
            hideForm={this.hideForm}
          />
        )}
      </div>
    );
  }
}

export default PaletteFormNav;
