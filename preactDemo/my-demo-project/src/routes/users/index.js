import { Component } from 'preact';

class Users extends Component {
	state = {
		data: null
	};

	fetchData = () => {
		fetch('http://localhost:9090/api/users').then((res) => res.json()).then(({ users }) => {
			this.setState({ data: users });
		});
	};

	componentDidMount() {
		this.fetchData();
	}

	// componentDidUpdate() {
	// 	console.log('updated!');
	// }

	render() {
		const { data } = this.state;
		return (
			data && (
				<section>
					<h1>Welcome To our selection of Users</h1>
					<p>This is the Users list.</p>
					{data.map((user) => (
						<div>
							<h2>{user.username}</h2>
							<p>{user.name}</p>
							{/* bad avatar url */}
							<img src={`${user.avatar_url}`} />
						</div>
					))}
				</section>
			)
		);
	}
}

export default Users;
