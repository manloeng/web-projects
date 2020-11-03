import React from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

// This is like setting state, so that it could be passed to different components
const ThemeContext = React.createContext({
  themes: themes.dark,
  toggleTheme: () => {}
});

export { ThemeContext };
