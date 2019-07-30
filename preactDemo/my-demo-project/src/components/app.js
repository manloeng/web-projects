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
		initialData: null,
		data: null
	};

	handleRoute = (e) => {
		this.setState({ currentRoute: e.url });
	};

	componentDidMount() {
		fetch(`http://localhost:9090/api`).then((response) => response.json()).then((responseJson) => {
			this.setState({ data: responseJson, initialData: responseJson });
		});
	}

	componentDidUpdate(prevProps, prevState) {
		const { currentRoute } = this.state;
		if (currentRoute !== prevState.currentRoute) {
			fetch(`http://localhost:9090/api${currentRoute}`).then((response) => response.json()).then((responseJson) => {
				this.setState({ data: responseJson });
			});
		}
	}

	render() {
		const { data, initialData } = this.state;
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" initialData={initialData} />
					<Users path="/users/" data={data} />
					<Topics path="/topics/" data={data} />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}
