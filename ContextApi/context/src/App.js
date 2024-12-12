import { Component } from "react";
import NavBar from "./NavBar";
import Form from "./Form";
import PageContext from "./PageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <PageContext>
          <LanguageProvider>
            <NavBar />
            <Form />
          </LanguageProvider>
        </PageContext>
      </ThemeProvider>
    );
  }
}

export default App;
