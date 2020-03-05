import React from "react";
import { ThemeContext } from "./ThemeContext";

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button {...props} style={{ backgroundColor: theme.background }}>
        Submit
      </button>
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
