import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';

const Header = () => (
	<header class={style.header}>
		<h1>NC News</h1>
		<nav>
			<Link activeClassName={style.active} href="/">
				Home
			</Link>
			<Link activeClassName={style.active} href="/users">
				Users
			</Link>
			<Link activeClassName={style.active} href="/topics">
				Topics
			</Link>
			<Link activeClassName={style.active} href="/comments">
				Comments
			</Link>
			<Link activeClassName={style.active} href="/articles">
				Articles
			</Link>
		</nav>
	</header>
);

export default Header;
