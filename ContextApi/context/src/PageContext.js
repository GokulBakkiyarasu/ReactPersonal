import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function PageContext(props) {
  const { isDarkMode } = useContext(ThemeContext);
  const styles = {
    backgroundColor: isDarkMode ? "Black" : "white",
    height: "100vh",
    width: "100vw",
  };
  return <div style={styles}>{props.children}</div>;
}
