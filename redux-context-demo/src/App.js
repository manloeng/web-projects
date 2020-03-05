import React from "react";
import { ThemeContext, themes } from "./components/ThemeContext.jsx";
import ThemedButton from "./components/Button.jsx";
import Toolbar from "./components/Toolbar.jsx";
import ThemeTogglerButton from "./components/ThemeToggler";

class App extends React.Component {
  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme
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
        <ThemeContext.Provider value={this.state}>
          <Toolbar toggleTheme={this.toggleTheme} />
          <Content></Content>
        </ThemeContext.Provider>
        <ThemedButton />
      </div>
    );
  }
}

function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

export default App;
