import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Header from './components/Header.jsx';

function App() {
	return (
		<div className="App">
			<Home path="/" />
			<Router>
				<Header path="/contacts" />
			</Router>
		</div>
	);
}

export default App;
