import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';

export default class App extends Component {
	state = {
		routes: null
	};

	handleRoute = (e) => {
		this.currentUrl = e.url;
	};

	componentDidMount() {
		fetch('http://localhost:9090/api').then((response) => response.json()).then((responseJson) => {
			this.setState({ routes: responseJson.routes });
		});
	}

	render() {
		const { routes } = this.state;
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" routes={routes} />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
