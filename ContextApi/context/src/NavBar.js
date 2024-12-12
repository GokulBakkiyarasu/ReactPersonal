import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Switch,
  InputBase,
  styled,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

// Create a theme
const theme = createTheme();

const StyledRoot = styled("div")({
  width: "100%",
  marginBottom: 0,
});

const StyledGrow = styled("div")({
  flexGrow: 1,
});

const StyledIconButton = styled(IconButton)({
  marginLeft: -12,
  marginRight: 20,
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const StyledSearch = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15), // Semi-transparent background
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledSearchIcon = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none", // Make it non-clickable
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
}));

// Styled component for InputBase input
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0), // Padding around the input
    paddingLeft: `calc(1em + ${theme.spacing(4)})`, // Padding for search icon space
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch", // Default width
      "&:focus": {
        width: "20ch", // Expanded width on focus
      },
    },
  },
}));

const content = {
  english: {
    search: "Search",
    flag: "🇬🇧",
  },
  tamil: {
    search: "தேடுங்கள்",
    flag: "🇮🇳",
  },
  malayalam: {
    search: "തിരയൂ",
    flag: "🇮🇳",
  },
};

function NavBar(props) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  console.log(language);
  return (
    <ThemeProvider theme={theme}>
      <StyledRoot>
        <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
          <Toolbar>
            <StyledIconButton color="inherit">
              <span role="img" aria-label="flag">
                {content[language]["flag"]}
              </span>
            </StyledIconButton>
            <StyledTypography variant="h6" color="inherit">
              App Title
            </StyledTypography>
            <Switch onClick={toggleTheme} />
            <StyledGrow />
            <StyledSearch>
              <StyledSearchIcon>
                <SearchIcon />
              </StyledSearchIcon>
              <StyledInputBase
                placeholder={`${content[language]["search"]}...`}
              />
            </StyledSearch>
          </Toolbar>
        </AppBar>
      </StyledRoot>
    </ThemeProvider>
  );
}
export default NavBar;
