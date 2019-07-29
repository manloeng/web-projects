import { h, Component } from 'preact';

class Users extends Component {
	state = {
		data: null
	};

	componentDidMount() {
		fetch(`http://localhost:9090/api/users`).then((response) => response.json()).then((responseJson) => {
			this.setState({ data: responseJson });
		});
	}

	render() {
		return (
			<div>
				{console.log(this)}
				<h1>Welcome To our selection of Users</h1>
				<p>This is the Users page.</p>
				{this.state.data.users.map((user) => (
					<div>
						<h2>{user.username}</h2>
						<p>{user.name}</p>
						bad avatar url
						<img src={`${user.avatar_url}`} />
					</div>
				))}
			</div>
		);
	}
}

export default Users;
