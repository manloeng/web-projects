import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { Router, Link } from "@reach/router";
import styled from "styled-components";
import Bitcoin from "./components/Bitcoin";
import Forward from "./media/forward.jpg";
import Back from "./media/back.jpg";

const Header = styled.header`
  font-size: 55px;
  padding: 10px;
  color: white;
  background: black;
`;

const BackDick = styled.img`
  display: flex;
  justify-content: flex-start;
  height: 50px;
  width: 100px;
  top: 2%;
  position: absolute;
  margin-left: 30px;
`;

const ForwardDick = styled.img`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
  height: 50px;
  width: 100px;
  top: 2%;
  position: absolute;
  right: 4%;
  margin-right: 10px;
`;

function App() {
  return (
    <div className="App">
      <Header>THE JOHN MCAFEE CONSPIRACY CORPORATION</Header>
      <Link to="/">
        <BackDick src={Back} />
      </Link>
      <Link to="/bitcoin">
        <ForwardDick src={Forward} />
      </Link>
      <Router>
        <Dashboard path="/" />
        <Bitcoin path="/bitcoin" />
      </Router>
    </div>
  );
}

export default App;
