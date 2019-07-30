const Users = ({ data }) =>
	data.users && (
		<div>
			<h1>Welcome To our selection of Users</h1>
			<p>This is the Users page.</p>
			{data.users.map((user) => (
				<div>
					<h2>{user.username}</h2>
					<p>{user.name}</p>
					bad avatar url
					<img src={`${user.avatar_url}`} />
				</div>
			))}
		</div>
	);

export default Users;
