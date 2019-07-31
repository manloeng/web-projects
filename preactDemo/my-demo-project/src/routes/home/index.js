import { Component } from 'preact';

class Home extends Component {
	state = {
		data: null
	};

	fetchData = () => {
		fetch('http://localhost:9090/api/').then((res) => res.json()).then(({ routes }) => {
			this.setState({ data: routes });
		});
	};

	componentDidMount() {
		this.fetchData();
	}

	render() {
		const { data } = this.state;
		return (
			data && (
				<header>
					<h1>Welcome To NC News</h1>
					<h3>This is the list of the avaiable routes.</h3>
					<ul>{Object.keys(data).map((key) => <li>{key}</li>)}</ul>
				</header>
			)
		);
	}
}

export default Home;
