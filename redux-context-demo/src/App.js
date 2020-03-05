import React from "react";
import { ThemeContext, themes } from "./components/ThemeContext.jsx";
import ThemedButton from "./components/Button.jsx";
import Toolbar from "./components/Toolbar.jsx";

class App extends React.Component {
  state = {
    theme: themes.light
  };

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar toggleTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <ThemedButton />
      </div>
    );
  }
}

export default App;
