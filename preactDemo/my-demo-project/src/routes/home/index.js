import { h, Component } from 'preact';
import style from './style';

class Home extends Component {
	state = {
		data: null
	};

	// componentDidMount() {
	// 	this.props.fetchData();
	// }

	// componentDidMount() {
	// 	console.log(this.state);
	// 	fetch(`http://localhost:9090/api`).then((response) => response.json()).then((responseJson) => {
	// 		this.setState({ data: responseJson });
	// 	});
	// }

	render() {
		return (
			<div class={style.home}>
				{console.log(this.state)}
				<h1>Welcome To NC News</h1>
				<p>This is the Home page.</p>
				{Object.keys(this.props.data.routes).map((key) => (
					<div>
						<p>{key}</p>
						<p>{this.props.data.routes[key].description}</p>
						<p>{JSON.stringify(this.props.data.routes[key]).exampleResponse}</p>
						{/* feels very nested */}
						{/* {console.log(data.routes[key].exampleResponse)} */}
						{/* {data.routes[key].exampleResponse && <p>{JSON.stringify(data.routes[key].exampleResponse.topic)}</p>} */}
						}
					</div>
				))}
			</div>
		);
	}
}

export default Home;
