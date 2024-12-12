import React, { useContext } from "react";
import {
  Avatar,
  Button,
  FormControl,
  FormControlLabel,
  Checkbox,
  Input,
  InputLabel,
  Paper,
  Typography,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { LanguageContext } from "./contexts/LanguageContext";

// Create a theme
const theme = createTheme();

const StyledMain = styled("main")(({ theme }) => ({
  width: "auto",
  display: "block",
  marginLeft: theme.spacing(3),
  marginRight: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    width: 400,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: `25px`,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
}));

const StyledButton = styled(Button)({
  marginTop: theme.spacing(3),
});

const words = {
  english: {
    email: "Email Address",
    password: "password",
    signin: "Sign IN",
    remember: "Remember Me",
  },
  tamil: {
    email: "மின்னஞ்சல் முகவரி",
    password: "கடவுச்சொல்",
    signin: "உள்நுழைய",
    remember: "என்னை நினைவில் வைக்கவும்",
  },
  malayalam: {
    email: "ഇമെയിൽ വിലാസം",
    password: "പാസ്‌വേഡ്",
    signin: "സൈൻ ഇൻ",
    remember: "എനിക്ക് ഓർമ്മിക്കൂ",
  },
};

function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  return (
    <ThemeProvider theme={theme}>
      <StyledMain>
        <StyledPaper>
          <StyledAvatar>
            <LockOutlined />
          </StyledAvatar>
          <Typography variant="h5">{words[language]["signin"]}</Typography>
          <Select
            variant="standard"
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="tamil">தமிழ்</MenuItem>
            <MenuItem value="malayalam">മലയാളം</MenuItem>
          </Select>
          <StyledForm>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">
                {words[language]["email"]}
              </InputLabel>
              <Input id="email" name="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">
                {words[language]["password"]}
              </InputLabel>
              <Input id="password" name="password" />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={words[language]["remember"]}
            />
            <StyledButton
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
            >
              {words[language]["signin"]}
            </StyledButton>
          </StyledForm>
        </StyledPaper>
      </StyledMain>
    </ThemeProvider>
  );
}

export default Form;
