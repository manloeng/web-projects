import React from "react";
import ThemedButton from "./Button.jsx";

function Toolbar(props) {
  return <ThemedButton onClick={props.toggleTheme}>Change Theme</ThemedButton>;
}

export default Toolbar;
