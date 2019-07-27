import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
import Profile from '../routes/profile';
import Users from '../routes/Users';

export default class App extends Component {
	state = {
		currentRoute: '/',
		prevRoute: null,
		data: null
	};

	handleRoute = (e) => {
		const { currentRoute, prevRoute } = this.state;
		this.setState({ currentRoute: e.url });
		if (!prevRoute) {
			this.setState({ prevRoute: currentRoute });
		}
		if (currentRoute !== prevRoute) {
			this.setState({ currentRoute: e.url });
		}
	};

	componentDidMount() {
		const { currentRoute } = this.state;
		if (currentRoute === '/') {
			fetch(`http://localhost:9090/api`).then((response) => response.json()).then((responseJson) => {
				this.setState({ data: responseJson });
			});
		}
	}

	componentDidUpdate() {
		const { currentRoute, prevRoute } = this.state;
		if (currentRoute !== prevRoute) {
			fetch(`http://localhost:9090/api${currentRoute}`).then((response) => response.json()).then((responseJson) => {
				this.setState({ data: responseJson, prevRoute: currentRoute });
			});
		}
	}

	render() {
		const { data } = this.state;
		return (
			<div id="app">
				{console.log(data)}
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" data={data} />
					<Users path="/users/" data={data} />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
