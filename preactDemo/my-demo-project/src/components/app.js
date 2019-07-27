import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Users from '../routes/Users';
import Topics from '../routes/Topics';

export default class App extends Component {
	state = {
		currentRoute: '/',
		data: null
	};

	handleRoute = (e) => {
		const reg = /\w+/g;
		if (e.url === '/') {
			this.setState({ currentRoute: '/' }, () => console.log(this.state));
		}
		if (e.url !== '/') {
			const matchedURL = e.url.match(reg)[0];
			// need to use the current state rather than this.state
			if (!this.state[matchedURL]) {
				fetch(`http://localhost:9090/api${e.url}`).then((response) => response.json()).then((responseJson) => {
					this.setState({ currentRoute: e.url, data: responseJson }, () => console.log(this.state));
				});
				if (this.state[matchedURL]) {
					this.setState({ currentRoute: e.url });
				}
			}
		}
	};

	componentWillMount() {
		fetch(`http://localhost:9090/api`).then((response) => response.json()).then((responseJson) => {
			this.setState({ data: responseJson }, () => console.log('here'));
		});
	}

	// componentDidUpdate() {
	// 	const { currentRoute, prevRoute } = this.state;
	// 	if (currentRoute !== prevRoute) {
	// 		fetch(`http://localhost:9090/api${currentRoute}`).then((response) => response.json()).then((responseJson) => {
	// 			this.setState({ data: responseJson, prevRoute: currentRoute });
	// 		});
	// 	}
	// }

	render() {
		const { data } = this.state;
		return (
			data && (
				<div id="app">
					<Header />
					<Router onChange={this.handleRoute}>
						<Home path="/" data={data} />
						<Users path="/users/" data={data} />
						{/* {topics && <Topics path="/topics/" topics={topics} />} */}
						<Profile path="/profile/" user="me" />
						<Profile path="/profile/:user" />
					</Router>
				</div>
			)
		);
	}
}
