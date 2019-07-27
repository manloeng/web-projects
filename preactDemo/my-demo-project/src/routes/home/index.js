import { h } from 'preact';
import style from './style';

const Home = ({ routes }) => (
	<div class={style.home}>
		<h1>Welcome To NC News</h1>
		<p>This is the Home page.</p>

		<p>{JSON.stringify(routes)}</p>
	</div>
);

export default Home;
