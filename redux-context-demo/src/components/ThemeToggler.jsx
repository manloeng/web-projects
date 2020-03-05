import React from "react";
import { ThemeContext } from "./ThemeContext";

// once the consumer is used
// it pulls out the state. Provided by the provider.
// in this case we have theme and toggleTheme
function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background }}
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
