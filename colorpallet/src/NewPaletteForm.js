import React, { Component } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { arrayMove } from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import DraggableColorList from "./DraggableColorList";
import seedColors from "./seedColors";
import sizes from "./sizes";

const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: 0,
    height: "calc(100vh - 64px)",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

const StyledContainer = styled("div")({
  width: "90%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const theme = createTheme(); // Create a theme instance

class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  };
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      colors: seedColors[0].colors,
    };

    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.addNewColor = this.addNewColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.clearColors = this.clearColors.bind(this);
    this.addRandomColor = this.addRandomColor.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  addNewColor(newColor) {
    this.setState({ colors: [...this.state.colors, newColor] });
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(newPaletteDetails) {
    let newPalette = {
      paletteName: newPaletteDetails.paletteName,
      emoji: newPaletteDetails.emoji,
      id: newPaletteDetails.paletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors,
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  removeColor(colorName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== colorName),
    });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  clearColors() {
    this.setState({ colors: [] });
  }

  addRandomColor() {
    const allColors = (
      this.props.palette.length === 0 ? seedColors : this.props.palette
    )
      .map((p) => p.colors)
      .flat();
    let random;
    let randomColor;
    let isDuplicateColor = true;
    const isDuplicateColorFunction = (name) => {
      return this.state.colors.some((color) => color.name === name);
    };
    while (isDuplicateColor) {
      random = Math.floor(Math.random() * allColors.length);
      randomColor = allColors[random];
      isDuplicateColor = isDuplicateColorFunction(randomColor.name);
    }
    this.setState({ colors: [...this.state.colors, randomColor] });
  }

  render() {
    const { open, colors } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" }}>
          <PaletteFormNav
            open={open}
            palette={this.props.palette}
            handleSubmit={this.handleSubmit}
            handleDrawerOpen={this.handleDrawerOpen}
          />
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",

                [sizes.down("xs")]: {
                  width: "430px",
                },
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <StyledContainer>
              <Typography variant="h4" noWrap component="div">
                Design Your Palette
              </Typography>
              <div>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.clearColors}
                >
                  Clear Palette
                </Button>
                <Button
                  variant="contained"
                  color={
                    colors.length >= this.props.maxColors ? "grey" : "primary"
                  }
                  onClick={this.addRandomColor}
                  disabled={colors.length >= this.props.maxColors}
                >
                  Random Color
                </Button>
              </div>
              <ColorPickerForm addNewColor={this.addNewColor} colors={colors} />
            </StyledContainer>
          </Drawer>
          <Main open={open}>
            <DrawerHeader />
            <DraggableColorList
              colors={colors}
              removeColor={this.removeColor}
              axis="xy"
              onSortEnd={this.onSortEnd}
            />
          </Main>
        </Box>
      </ThemeProvider>
    );
  }
}

export default NewPaletteForm;
