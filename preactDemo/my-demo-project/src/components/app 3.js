import { Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for routes
import Home from '../routes/home';
// import Profile from '../routes/profile';
import Users from '../routes/Users';
// import Topics from '../routes/Topics';

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Users path="/users" />
			{/* <Topics path="/topics/" />
			<Profile path="/profile/" />
			<Profile path="/profile/:user" /> */}
		</Router>
	</div>
);

export default App;
