import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
